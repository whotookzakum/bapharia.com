import { createSchema } from 'graphql-yoga'
import { getDatabaseEntries } from './resolvers.js'
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { checkStringIncludes } from '$lib/utils/string_utils.js';

export const resolvers = {
	Query: {
		entries(_, { searchTerm }) {
			const entries = getDatabaseEntries()
			if (searchTerm) {
				const filteredResults = 
					entries.filter(entry => 
						entry.id.includes(searchTerm)
						|| checkStringIncludes(entry.bapharia.name.ja_JP, searchTerm)
						|| checkStringIncludes(entry.bapharia.name.en_US, searchTerm)
					)
				return filteredResults
			}
			return entries
		},
		entry(_, { id }) {
			const entries = getDatabaseEntries()
			return entries.find(item => item.id === id)
		}
	},
	DBEntry: {
		// https://the-guild.dev/graphql/tools/docs/resolvers#unions-and-interfaces
		__resolveType(obj, context, info) {
			if (obj.bapharia.filterGroup === "items") {
				return 'Item'
			}

			if (obj.bapharia.filterGroup === "enemies") {
				return 'Enemy'
			}

			if (obj.bapharia.filterGroup === "costumes") {
				return 'Costume'
			}

			if (obj.bapharia.filterGroup === "gestures") {
				return 'Gesture'
			}

			return null
		}
	}
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = createSchema({
	typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
	resolvers
})
