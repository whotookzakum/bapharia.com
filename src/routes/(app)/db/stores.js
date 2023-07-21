import { writable, readable, derived, get } from "svelte/store";
import cloneDeep from "lodash/cloneDeep"
import CATEGORIES from "./filters/categories.json";
import CLASSES from "./filters/classes.json";
import AR from "./filters/adventurer_rank.json";
import LEVEL from "./filters/level.json";
import ELEMENTS from "./filters/elements.json";

export const userSearch = writable("")
export const resultsPerPage = writable(10)
export const currentPage = writable(1)

export const categories = writable(cloneDeep(CATEGORIES));
export const classes = writable(cloneDeep(CLASSES));
export const ar = writable(cloneDeep(AR));
export const level = writable(cloneDeep(LEVEL));
export const elements = writable(cloneDeep(ELEMENTS));

export const selectedCategories = derived(
    categories,
    ($categories) =>
        $categories.reduce((acc, category) => {
            if (category.checked) {
                if (acc) return `${acc} ${category.id}`;
                return category.id;
            }
            return acc;
        }, "")
)

export const selectedLevels = derived(
    level,
    ($level) => `${$level.min} ${$level.max}`
)

export const selectedAR = derived(
    ar,
    ($ar) => `${$ar.min} ${$ar.max}`
)

export function getSubcategoryString(categoriesStore, name) {
    // Takes a store, otherwise defaults to CATEGORIES
    let categories = CATEGORIES
    if (typeof categoriesStore === "object") categories = categoriesStore
    return categories.find(category => category.id === name)?.subcategories
        .reduce((acc, subcategory) => {
            if (subcategory.checked) {
                let idsToAppend = subcategory.id

                // Array of IDs
                if (Array.isArray(idsToAppend)) {
                    idsToAppend = subcategory.id.reduce((idString, id) => {
                        if (idString) return `${idString} ${id}`
                        return `${id}`
                    }, "")
                }

                if (acc) return `${acc} ${idsToAppend}`;
                return `${idsToAppend}`;
            }
            return acc;
        }, "")
}


export const selectedItems = derived(categories, ($categories) => getSubcategoryString($categories, "items"))
export const selectedWeapons = derived(categories, ($categories) => getSubcategoryString($categories, "weapons"))
export const selectedImagine = derived(categories, ($categories) => getSubcategoryString($categories, "imagine"))
export const selectedEnemies = derived(categories, ($categories) => getSubcategoryString($categories, "enemies"))
export const selectedSkills = derived(categories, ($categories) => getSubcategoryString($categories, "skills"))
export const selectedMaps = derived(categories, ($categories) => getSubcategoryString($categories, "maps"))
export const selectedCostumes = derived(categories, ($categories) => getSubcategoryString($categories, "costumes"))
export const selectedAvatarParts = derived(categories, ($categories) => getSubcategoryString($categories, "avatarparts"))