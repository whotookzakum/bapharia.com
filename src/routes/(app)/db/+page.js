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

    return {
        searchTerm: url.searchParams.get("search") || null,
        categories: url.searchParams.get("categories") || null,
        items: url.searchParams.get("items") || null,
        // maxResults: 10,
        // categories: JSON.stringify($filterCategoryTypes),
    }
};