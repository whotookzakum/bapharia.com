import { getImagineSummaries } from "./imagines";
import { getItemSummaries } from "./items";
import { getSeasonSummaries } from "./seasons";
import { getWeaponSummaries } from "./weapons";

const entries = (lang) => {
    return [
        ...getWeaponSummaries(lang),
        ...getSeasonSummaries(lang),
        ...getItemSummaries(lang),
        // ...getImagineSummaries(lang),
    ]
}

export default entries;