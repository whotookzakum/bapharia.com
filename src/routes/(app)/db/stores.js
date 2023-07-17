import { writable, readable, derived, get } from "svelte/store";
import cloneDeep from "lodash/cloneDeep"
import CATEGORIES from "./filters/categories.json";
import CLASSES from "./filters/classes.json";
import AR from "./filters/adventurer_rank.json";
import LEVEL from "./filters/level.json";
import ELEMENTS from "./filters/elements.json";

export const userSearch = writable("")
export const resultsPerPage = writable(10)

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

export const selectedItems = derived(
    categories,
    ($categories) => $categories.find(category => category.id === "items")?.subcategories
        .reduce((acc, subcategory) => {
            if (subcategory.checked) {
                if (acc) return `${acc} ${subcategory.id}`;
                return `${subcategory.id}`;
            }
            return acc;
        }, "")
)