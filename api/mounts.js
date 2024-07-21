import { getText, getCategory, getAssets, getSources } from "./utils";
import MOUNT from "./bp_api/bno/mount.json";

function processMount(mount, lang) {
    const name = getText("master_mount_imagine_text", mount.mount_name_text_id, lang)
    const category = getCategory("Mount", "default", lang)
    const assets = getAssets("mountimagine", mount.id)
    const sources = getSources(mount, lang, [7])

    return {
        text: {
            name,
            category
        },
        assets,
        sources,
        resolveType: "Mount",
        ...mount
    }
}

export function getEntry(id, lang) {
    return processStamp(MOUNT.find(mount => mount.id === id), lang)
}

export const getSummaries = (lang) => MOUNT.map(mount => {
    const { icon, iconL } = getAssets("mountimagine", mount.id)
    return {
        href: `/db/mounts/${mount.id}`,
        name: getText("master_mount_imagine_text", mount.mount_name_text_id, lang),
        jpName: getText("master_mount_imagine_text", mount.mount_name_text_id, "ja_JP"),
        icon,
        iconL,
        category: "Mount"
    }
})

const mounts = (lang) => MOUNT.map(mount => processMount(mount, lang))

export default mounts;