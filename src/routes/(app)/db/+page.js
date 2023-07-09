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
    let searchTerm = url.searchParams.get("search")
    return {
        searchTerm
        // maxResults: 10,
        // categories: JSON.stringify($filterCategoryTypes),
    }
};


