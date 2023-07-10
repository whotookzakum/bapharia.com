// Runs every goto() with invalidateAll
// TODO implement 500ms debounce

import { userSearch } from "$lib/stores";
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

export const _DBSearchQueryVariables = ({ url }) => {
    return {
        searchTerm: url.searchParams.get("search") || null
        // maxResults: 10,
        // categories: JSON.stringify($filterCategoryTypes),
    }
};