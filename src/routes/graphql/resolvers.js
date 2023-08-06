
import { checkStringIncludes } from '$lib/utils/string_utils.js';
import entries from "../kv/functions";
import items from "../kv/functions/items";
import weapons from "../kv/functions/weapons";
import imagines from "../kv/functions/imagines";
import enemies from '../kv/functions/enemies';
import skills from '../kv/functions/skills';
import tokens from '../kv/functions/tokens';
import liquidMemories from '../kv/functions/liquidmemories';
import gestures from '../kv/functions/gestures';
import stampSets from '../kv/functions/stampsets';
import maps from '../kv/functions/maps';
import costumes from '../kv/functions/costumes';
import avatars from '../kv/functions/avatars';
import quests from '../kv/functions/quests';

const resolvers = {
    Query: {
        async entries(_, args) {
            let results = [];

            function matchesSearchTerm(id, name) {
                if (!args.searchTerm) return true
                return id.includes(args.searchTerm) || checkStringIncludes(name.ja_JP, args.searchTerm) || checkStringIncludes(name.en_US, args.searchTerm)
            }

            function matchesFilter(filter, id) {
                if (!args[filter]) return true
                // Turn into an array so values like "1" are not true if "11" is included
                return args[filter].split(" ").includes(id.toString())
            }

            function matchesElement(itemType, id) {
                if (!args.elements) return true
                
                if (itemType === "weapon") {
                    switch (id) {
                        case 3:
                            id = 1
                            break;
                        case 5:
                            id = 2
                            break;
                        case 4:
                            id = 3
                            break;
                        case 2:
                            id = 4
                            break;
                        case 6:
                            id = 5
                            break;
                        case 7:
                            id = 6
                            break;
                    }
                }

                return args.elements.split(" ").includes(id.toString())
            }

            // Items
            if (!args.categories || args.categories.includes("items")) {
                let categoryResults = items
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesFilter("items", result.category)
                    )
                results.push(...categoryResults)
            }

            // Weapons
            if (!args.categories || args.categories.includes("weapons")) {
                let categoryResults = weapons
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesFilter("weapons", result.is_for_weapon_stickers)
                        && matchesFilter("classes", result.equip_class)
                        && matchesElement("weapon", result.attribute)
                    )
                results.push(...categoryResults)
            }

            // Imagine
            if (!args.categories || args.categories.includes("imagine")) {
                let categoryResults = imagines
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesFilter("imagine", result.imagine_type)
                    )
                results.push(...categoryResults)
            }

            // Enemies
            if (!args.categories || args.categories.includes("enemies")) {
                let categoryResults = enemies
                    .filter(result =>
                        matchesSearchTerm(result.id, result.name)
                        && matchesFilter("enemies", result.is_boss)
                    )
                results.push(...categoryResults)
            }

            // Skills
            if (!args.categories || args.categories.includes("skills")) {
                let categoryResults = skills
                    .filter(result => {
                        if (result.skill_type === 8) {
                            if (result.ability_type === 100) {
                                return matchesSearchTerm(result.id, result.name) && matchesFilter("skills", 81)
                            }
                            return matchesSearchTerm(result.id, result.name) && matchesFilter("skills", 80)
                        }
                        return matchesSearchTerm(result.id, result.name) && matchesFilter("skills", result.skill_type)
                    })
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
                        && matchesFilter("maps", result.id.slice(0, 3))
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
                        && matchesFilter("costumes", result.costumeType)
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
                        && matchesFilter("avatarparts", result.parts_icon_type)
                    )
                results.push(...categoryResults)
            }

            // Quests
            if (!args.categories || args.categories.includes("quests")) {
                let categoryResults = quests
                    .filter(result => 
                        matchesSearchTerm(result.long_id, result.name) 
                        && matchesFilter("quests", result.prefix)
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