export { getText, getCategory } from "./text"
export { getFile } from "./file"
export { getAssets } from "./assets"
export { getSources } from "./sources"
export { getAbilities, getEquipmentStats } from "./stats"
export { getRewardCondensed } from "./rewards"

export const fetchDTs = async (clientFiles) => {
    const iterableItemFiles = Object.entries(clientFiles)

    const data = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            return data.default
        })
    )

    return data.flat().filter(dataObj => dataObj.Type !== "BlueprintGeneratedClass")
}