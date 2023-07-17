
import entries from "../(generators)/kv/functions";
import items from "../(generators)/kv/functions/items";
import weapons from "../(generators)/kv/functions/weapons";
import { checkStringIncludes } from '$lib/utils/string_utils.js';

const resolvers = {
    Query: {
        async entries(_, args) {
            let results = [];

            function matchesSearchTerm(id, name) {
                if (!args.searchTerm) return true
                return id.includes(args.searchTerm) || checkStringIncludes(name.ja_JP, args.searchTerm) || checkStringIncludes(name.en_US, args.searchTerm)
            }

            function matchesSubcategories(key, subcategory_id) {
                if (!args[key]) return true
                return args[key].includes(subcategory_id)
            }

            if (!args.categories || args.categories.includes("items")) {
                let categoryResults = items
                    .filter(result => 
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("items", result.category)
                    )
                results.push(...categoryResults)
            }

            if (!args.categories || args.categories.includes("weapons")) {
                let categoryResults = weapons
                    .filter(result => 
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("weapons", result.is_for_weapon_stickers)
                    )
                results.push(...categoryResults)
            }

            const totalResults = results.length

            const lowerBound = args.offset && args.offset >= 0 ? args.offset : 0
            const upperBound = lowerBound + args.limit || lowerBound + 10
            results = results.slice(lowerBound, upperBound)

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
                totalResults
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