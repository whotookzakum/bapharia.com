
import entries from "../kv/functions";
import { checkStringIncludes } from '$lib/utils/string_utils.js';

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

            let categories = JSON.parse(args.categories)
            if (categories.length > 0) {
                filteredEntries =
                    filteredEntries?.filter(entry =>
                        categories?.includes(entry?.entryTypes[0])
                    )
            }

            const { connectionFromArray } = await import('./connections.mjs')

            const connection = connectionFromArray(filteredEntries, args)
            connection.totalResults = filteredEntries.length

            return connection
        },
        entry(_, { longId }) {
            return entries.find(entry => entry.entryTypes[0] + entry.id === longId)
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