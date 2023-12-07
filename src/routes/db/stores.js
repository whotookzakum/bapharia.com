import { writable } from "svelte/store";
import CATEGORIES from "./filters/categories.json"
import uniqBy from "lodash/uniqBy"

export const userSearch = writable("")
export const resultsPerPage = writable(10)
export const currentPage = writable(1)

export const uniqueCategories = uniqBy(CATEGORIES, cat => cat.param).map(obj => obj.param)

export const categories = writable(CATEGORIES)