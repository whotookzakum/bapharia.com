
import { stampSets, maps, items, enemies, skills, costumes, gestures, tokens, liquidMemories, imagines, weapons } from "./functions";
import { checkStringIncludes } from '$lib/utils/string_utils.js';

const entries = [
    ...items,
    ...enemies,
    ...costumes,
    ...gestures,
    ...imagines,
    ...liquidMemories,
    ...stampSets,
    ...tokens,
    ...weapons,
    ...skills,
    ...maps
]

const resolvers = {
    Query: {
        async entries(_, args) {
            let filteredEntries = entries;
            if (args.searchTerm) {
                filteredEntries =
                    entries.filter(entry =>
                        entry.id.includes(args.searchTerm)
                        || checkStringIncludes(entry.name.ja_JP, args.searchTerm)
                        || checkStringIncludes(entry.name.en_US, args.searchTerm)
                    )
            }

            const { connectionFromArray } = await import('./connections.mjs')

            const connection = connectionFromArray(filteredEntries, args)
            connection.totalResults = filteredEntries.length

            return connection
        },
        entry(_, { id }) {
            return entries.find(item => item.id === id)
        }
    },
    DBEntry: {
        // https://the-guild.dev/graphql/tools/docs/resolvers#unions-and-interfaces
        __resolveType(obj, context, info) {
            if (obj.filterGroup === "items") {
                return 'Item'
            }

            if (obj.filterGroup === "enemies") {
                return 'Enemy'
            }

            if (obj.filterGroup === "costumes") {
                return 'Costume'
            }

            if (obj.filterGroup === "gestures") {
                return 'Gesture'
            }

            if (obj.filterGroup === "imagine") {
                return 'Imagine'
            }

            if (obj.filterGroup === "liquidMemories") {
                return 'LiquidMemory'
            }

            if (obj.filterGroup === "stampSets") {
                return 'StampSet'
            }

            if (obj.filterGroup === "tokens") {
                return 'Token'
            }

            if (obj.filterGroup === "weapons") {
                return 'Weapon'
            }

            if (obj.filterGroup === "skills") {
                return 'Skill'
            }

            if (obj.filterGroup === "maps") {
                return 'GameMap'
            }

            return null
        }
    }
}

export default resolvers;