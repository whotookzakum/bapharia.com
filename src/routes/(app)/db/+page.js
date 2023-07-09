import { userSearch } from "$lib/stores";
import { get } from "svelte/store";
import debounce from "lodash/debounce";
import { load_DBSearchQuery } from '$houdini'

// Runs every goto() with invalidateAll
// TODO implement 500ms debounce

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
    let searchTerm = get(userSearch)
    // searchTerm = url.searchParams.get("search")
    // searchTerm = searchTerm
    return {
        searchTerm
        // maxResults: 10,
        // categories: JSON.stringify($filterCategoryTypes),
    }
};


