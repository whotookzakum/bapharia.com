
import { checkStringIncludes } from '$lib/utils/string_utils.js';
import entries from "../(generators)/kv/functions";
import items from "../(generators)/kv/functions/items";
import weapons from "../(generators)/kv/functions/weapons";
import imagines from "../(generators)/kv/functions/imagines";

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

            // Items
            if (!args.categories || args.categories.includes("items")) {
                let categoryResults = items
                    .filter(result => 
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("items", result.category)
                    )
                results.push(...categoryResults)
            }

            // Weapons
            if (!args.categories || args.categories.includes("weapons")) {
                let categoryResults = weapons
                    .filter(result => 
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("weapons", result.is_for_weapon_stickers)
                    )
                results.push(...categoryResults)
            }

            // Imagine
            if (!args.categories || args.categories.includes("imagine")) {
                let categoryResults = imagines
                    .filter(result => 
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("imagine", result.imagine_type)
                    )
                results.push(...categoryResults)
            }

            // Page Info
            const lowerBound = args.offset
            const upperBound = lowerBound + args.limit
            const slicedResults = results.slice(lowerBound, upperBound)
            const hasNextPage = results.slice(upperBound, upperBound + args.limit).length > 0
            const hasPreviousPage = results.slice(lowerBound - args.limit, lowerBound).length > 0

            return {
                results: slicedResults,
                totalResults: results.length,
                hasNextPage,
                hasPreviousPage
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