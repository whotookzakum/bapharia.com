
import { checkStringIncludes } from '$lib/utils/string_utils.js';
import entries from "../(generators)/kv/functions";
import items from "../(generators)/kv/functions/items";
import weapons from "../(generators)/kv/functions/weapons";
import imagines from "../(generators)/kv/functions/imagines";
import enemies from '../(generators)/kv/functions/enemies';
import skills from '../(generators)/kv/functions/skills';
import tokens from '../(generators)/kv/functions/tokens';
import liquidMemories from '../(generators)/kv/functions/liquidmemories';
import gestures from '../(generators)/kv/functions/gestures';
import stampSets from '../(generators)/kv/functions/stampsets';
import maps from '../(generators)/kv/functions/maps';
import costumes from '../(generators)/kv/functions/costumes';
import avatars from '../(generators)/kv/functions/avatars';

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
                // Turn into an array so values like "1" are not true if "11" is included
                return args[key].split(" ").includes(subcategory_id.toString())
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

            // Enemies
            if (!args.categories || args.categories.includes("enemies")) {
                let categoryResults = enemies
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("enemies", result.is_boss)
                    )
                results.push(...categoryResults)
            }

            // Skills
            if (!args.categories || args.categories.includes("skills")) {
                let categoryResults = skills
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("skills", result.skill_type)
                    )
                results.push(...categoryResults)
            }

            // Tokens
            if (!args.categories || args.categories.includes("tickets")) {
                let categoryResults = tokens
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                    )
                results.push(...categoryResults)
            }

            // Maps
            if (!args.categories || args.categories.includes("maps")) {
                let categoryResults = maps
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("maps", result.id.slice(0, 3))
                    )
                results.push(...categoryResults)
            }

            // Liquid Memories
            if (!args.categories || args.categories.includes("liquidmemories")) {
                let categoryResults = liquidMemories
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                    )
                results.push(...categoryResults)
            }

            // Costumes
            if (!args.categories || args.categories.includes("costumes")) {
                let categoryResults = costumes
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("costumes", result.id)
                    )
                results.push(...categoryResults)
            }

            // Emotes
            if (!args.categories || args.categories.includes("emotes")) {
                let categoryResults = gestures
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                    )
                results.push(...categoryResults)
            }

             // Stamp Sets
             if (!args.categories || args.categories.includes("stampsets")) {
                let categoryResults = stampSets
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                    )
                results.push(...categoryResults)
            }

            // Avatar Parts
            if (!args.categories || args.categories.includes("avatarparts")) {
                let categoryResults = avatars
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesSubcategories("avatarparts", result.parts_icon_type)
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