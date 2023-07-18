// Runs every goto() with invalidateAll
// TODO implement 500ms debounce

import { userSearch, selectedCategories } from "./stores";
import { get } from "svelte/store";

// export const load = async (event) => {
//     return {
//         ...(await load_DBSearchQuery({ event })),
//     }
// }

// const updateResultsDebounced = debounce(() => {
//     _DBSearchQueryVariables = () => {
//         return {
//             searchTerm: userSearchInput,
//         };
//     };
// }, 500);

export const _DBSearchQueryVariables = async ({ url }) => {
    const limit = url.searchParams.get("show") ? parseInt(url.searchParams.get("show")) : 10
    const offset = url.searchParams.get("page") ? parseInt(url.searchParams.get("page")) * limit - limit : 0

    return {
        limit,
        offset,
        searchTerm: url.searchParams.get("search") || null,
        categories: url.searchParams.get("categories") || null,
        items: url.searchParams.get("items") || null,
        weapons: url.searchParams.get("weapons") || null,
        imagine: url.searchParams.get("imagine") || null,
        enemies: url.searchParams.get("enemies") || null,
        skills: url.searchParams.get("skills") || null,
    }
};