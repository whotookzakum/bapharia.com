import IMAGINE from "$bp_api/japan/imagine.json";
import PARAM_LEVEL from "$bp_api/japan/imagine/param_level.json";
import PERK_PICK from "$bp_api/japan/imagine/perk_pick.json";
import WEAPONPERKS from "$bp_api/japan/WEAPONPERKS.json";
import PERKS from "$bp_api/japan/perks.json";
import ImagineArtsName from "$bp_client/japan/Content/Text/ImagineArtsName.json"
import { getText, getAssets, getSources, fetchDTs, getCategory, getAbilities } from "./utils";
import ImagineEffectType from "$bp_client/japan/Content/Text/ImagineEffectType.json"
import ATTACK_DATA from "$bp_api/japan/attack_data.json"

// TODO: 3d models
// TODO: Mount imagine
// TODO: Limit break stats

// Collection of DataTables from client
const DTList_Skills = await fetchDTs({
    ...import.meta.glob('./bp_client/japan/Content/Blueprints/Player/Skill/*/*.json'),
    ...import.meta.glob('./bp_client/japan/Content/Blueprints/Player/Skill/*/*/*.json')
})

const DTList_Projectiles = await fetchDTs(
    import.meta.glob('./bp_client/japan/Content/Blueprints/Magic/Imagine/*/*/*.json'))

const DT_ImagineTable = DTList_Skills.find(obj => obj.Name === "ImagineTable")

function processImagine(imagine, lang) {
    const name = getText("master_imagine_text", imagine.imagine_name, lang)
    const desc = getText("master_imagine_text", imagine.imagine_desc, lang)
    const category = getCategory("Imagine", imagine.imagine_type, lang)
    const assets = getAssets("imagine", imagine.id)
    const skillData = getSkillData(imagine)
    const params = PARAM_LEVEL.filter(item => item.pattern_id === imagine.param_type)
    const sources = getSources(imagine, lang, [6])

    const skillName = ImagineArtsName[0].Properties.TextTable.find(table => table.Id.IdString === imagine.imagine_arts)?.Text
    // Ogre01_Blow00RtWide_A01
    const skillTypeIdString = DT_ImagineTable.Rows[imagine.imagine_arts]?.ImagineArtsTypeNameID
    const skillType = ImagineEffectType[0].Properties.TextTable.find(obj => obj.Id.IdString === skillTypeIdString)?.Text

    return {
        text: {
            name,
            desc,
            category,
            skillName,
            skillType
        },
        // skillData,
        assets,
        // params,
        sources,
        resolveType: "Imagine",
        ...imagine
    }
}

function getSkillData(imagine) {
    // "/Blueprints/Player/Skill/Imagine/BattleImagine/ImagineSkill_IE001_00_01_A01_Ogre.ImagineSkill_IE001_00_01_A01_Ogre_C"
    const ImagineSkillDataPath = DT_ImagineTable.Rows[imagine.imagine_arts]?.ImagineSkill.AssetPathName.replace("/Game", "")
    const ImagineSkillType = ImagineSkillDataPath?.split(".").pop()
    const ImagineSkillData = DTList_Skills.find(obj => obj.Type === ImagineSkillType)

    if (!ImagineSkillData) return

    const projectilesData = getProjectilesData(ImagineSkillData.Properties)

    return {
        ...ImagineSkillData.Properties,
        ...projectilesData
    }
}

function getProjectilesData(properties) {
    let AppendLoadProjectileList = properties.AppendLoadProjectileList

    if (AppendLoadProjectileList) {
        AppendLoadProjectileList = AppendLoadProjectileList.map(projectile => {
            const DataTableName = projectile.ObjectName.split("'")[1]
            const DataTable = DTList_Projectiles.find(obj => obj.Name === DataTableName)

            return {
                ...projectile,
                ProjectileData: getProjectileData(DataTable)
            }
        })
    }

    let CastLaunchProjectileList = properties.CastLaunchProjectileList.map(projectileWrapper => {
        return {
            ...projectileWrapper,
            ProjectileHandleList: projectileWrapper.ProjectileHandleList.map(projectile => {
                const DataTableName = projectile.DataTable.ObjectName.split("'")[1]
                const DataTable = DTList_Projectiles.find(obj => obj.Name === DataTableName)

                return {
                    ...projectile,
                    ProjectileData: getProjectileData(DataTable)
                }
            })
        }
    })
        // Remove objects where every ProjectileData[] in ProjectileHandleList[] is empty
        .filter(projectileWrapper =>
            !projectileWrapper.ProjectileHandleList.every(projectile => projectile.ProjectileData.length < 1))

    return {
        AppendLoadProjectileList,
        CastLaunchProjectileList
    }
}

function getProjectileData(DataTable) {
    return Object.entries(DataTable.Rows).map(([key, value]) => {
        const { AttackID, GroundCollisionConfig, CollisionShape, MoveBaseConfig, MoveHomingConfig, HomingCorrectionAngle, SpawnInfo, DestroyCondition, DamageType } = value
        // SplashSize is either Small or NONE
        // EffectTableHandle links to DT_ProjectileEffectInfo but has no relevant data as of now
        // SpawnInfo.NonTargetSpawnDistanceFront might be the spawn distance?

        const attackData = ATTACK_DATA.find(atk => atk.attack_id === AttackID.AttackID) || AttackID

        const StatusAliments = value.StatusAliments.map(buff => {
            if (buff.DataTable) {
                const BuffDataPath = buff.DataTable.ObjectName.split("'")[1]
                const BuffDataTable = DTList_Projectiles.find(obj => obj.Name === BuffDataPath)
                // const BuffData = BuffDataTable.Rows[buff.RowName]

                return {
                    ...buff,
                    // BuffData
                }
            }

        })

        return {
            ProjectileId: key,
            attackData,
            GroundCollisionConfig,
            CollisionShape,
            MoveBaseConfig,
            MoveHomingConfig,
            HomingCorrectionAngle,
            StatusAliments,
            SpawnInfo,
            DestroyCondition,
            DamageType
        }
    })
        // Remove the projectiles that I believe are just the imagine model spawning in
        .filter(projectile =>
            !projectile.ProjectileId.includes("Imagine_I") && !projectile.ProjectileId.includes("cutin_"))
}

function getImagineAbilities(imagine, lang) {
    return PERK_PICK.filter(perk => perk.table_id === imagine.table_id).map(imaginePerk => {
        const weaponPerkData = WEAPONPERKS.find(perk => perk.id === imaginePerk.imagine_perk_id)
        const name = getText("weapon_perk_text", weaponPerkData.name, lang)
        const stats = getImagineStats(weaponPerkData)

        return {
            text: {
                name
            },
            id: weaponPerkData.perk_id,
            probability: imaginePerk.imagine_perk_rate,
            stats
        }
    })
}

function getImagineStats(weaponPerkData, lang) {
    const perkData = PERKS.find(perk => perk.id === weaponPerkData.perk_id)
    const stats = []
    for (let i = 1; i < 3; i++) {
        const currentPerkNameId = perkData[`ability_name${i}`]
        if (currentPerkNameId) {
            stats.push({
                text: {
                    name: getText("perk_text", currentPerkNameId, lang)
                },
                value: weaponPerkData[`ability_parts${i}_value1`]
            })
        }
    }
    return stats
}

export function getEntry(id, lang) {
    return processImagine(IMAGINE.find(imag => imag.id == id), lang)
}

export const getImagineSummaries = (lang) => IMAGINE.map(imagine => {
    const { icon, iconL } = getAssets("imagine", imagine.id)
    return {
        href: `/db/imagines/${imagine.id}`,
        text: {
            name: getText("master_imagine_text", imagine.imagine_name, lang),
            jpName: getText("master_imagine_text", imagine.imagine_name, "ja_JP")
        },
        assets: {
            icon,
            iconL
        },
        resolveType: "Imagine",
        category: imagine.imagine_type
    }
})

const imagines = (lang) => IMAGINE.map(imagine => processImagine(imagine, lang))

export default imagines;