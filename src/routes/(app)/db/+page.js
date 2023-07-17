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
    // console.log(get(userSearch))

    // let thing = ""
    // userSearch.subscribe(value => {
    //     thing = value
    // })

    // console.log('search:', thing)
    const numberOfResults = url.searchParams.get("show") || 10
    const offset = url.searchParams.get("page") ? parseInt(url.searchParams.get("page")) * numberOfResults - numberOfResults : 0

    return {
        offset,
        searchTerm: url.searchParams.get("search") || null,
        categories: url.searchParams.get("categories") || null,
        items: url.searchParams.get("items") || null,
        weapons: url.searchParams.get("weapons") || null,
    }
};