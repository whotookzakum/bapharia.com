import { getWeaponSummaries } from "./weapons";

const entries = (lang) => {
    return [
        ...getWeaponSummaries(lang)
    ]
}

export default entries;