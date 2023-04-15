import { createSchema } from 'graphql-yoga'
import { getItems, getEnemies, getDatabaseEntries } from './resolvers.js'
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const resolvers = {
	Query: {
		// items() {
		// 	const items = getItems()
		// 	return items.items
		// },
		// item(_, { id }) {
		// 	const items = getItems()
		// 	const item = items.find(item => item.id === id)
		// 	return item
		// },
		// enemy(_, { id }) {
		// 	const enemies = getEnemies()
		// 	const enemy = enemies.find(item => item.id === id)
		// 	return enemy
		// },
		// enemies() {
		// 	const enemies = getEnemies()
		// 	return enemies.enemies
		// },
		entries() {
			const entries = getDatabaseEntries()
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
