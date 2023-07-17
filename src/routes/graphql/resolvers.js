
import entries from "../(generators)/kv/functions";
import items from "../(generators)/kv/functions/items";
import { checkStringIncludes } from '$lib/utils/string_utils.js';

const resolvers = {
    Query: {
        async entries(_, args) {
            let results = [];

            let subcategories = {
                Item: [1, 2]
            }

            // if categories > 0
            // break into an

            if (!args.categories || args.categories.includes("items")) {
                let categoryResults = items
                    // .filter(result => subcategories["Item"].includes(result.subcategory_id))
                results.push(...categoryResults)
            }

            // console.log(results)

            


            // if (args.searchTerm) {
            //     results =
            //         entries.filter(entry =>
            //             entry.id.includes(args.searchTerm)
            //             || checkStringIncludes(entry.name.ja_JP, args.searchTerm)
            //             || checkStringIncludes(entry.name.en_US, args.searchTerm)
            //         )
            // }

            // let categories = JSON.parse(args.categories)
            // if (categories.length > 0) {
            //     results =
            //         results?.filter(entry =>
            //             categories?.includes(entry?.entryTypes[0])
            //         )
            // }

            // results = results[0]
            // console.log(results)
            // console.log(args)


            return {
                results,
                totalResults: results.length
            }
        },
        entry(_, { longId }) {
            // return entries.find(entry => entry.entryTypes[0] + entry.id === longId)
        }
    },
    DBEntry: {
        // https://the-guild.dev/graphql/tools/docs/resolvers#unions-and-interfaces
        __resolveType(obj, context, info) {
            return obj.entryTypes[0] || null
        }
    }
}

export default resolvers;