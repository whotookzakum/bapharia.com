import { writable } from "svelte/store";
import CATEGORIES from "./filters/categories.json"
import CLASSES from "./filters/classes.json"
import ELEMENTS from "./filters/elements.json"
import LEVEL from "./filters/level.json"
import AR from "./filters/adventurer_rank.json"
import uniqBy from "lodash/uniqBy"

export const userSearch = writable("")
export const resultsPerPage = writable(10)
export const currentPage = writable(1)

export const uniqueCategories = uniqBy(CATEGORIES, cat => cat.param).map(obj => obj.param)

export const categories = writable(CATEGORIES)
export const classes = writable(CLASSES)
export const elements = writable(ELEMENTS)
export const level = writable(LEVEL)
export const ar = writable(AR)