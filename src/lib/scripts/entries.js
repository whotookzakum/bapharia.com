import { getImagineSummaries } from "./imagines";
import { getItemSummaries } from "./items";
import { getWeaponSummaries } from "./weapons";

const entries = (lang) => {
    return [
        ...getWeaponSummaries(lang),
        // ...getItemSummaries(lang),
        // ...getImagineSummaries(lang),
    ]
}

export default entries;