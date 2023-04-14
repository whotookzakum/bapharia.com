import { createSchema } from 'graphql-yoga'
import { getItems } from './resolvers.js'
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const resolvers = {
	Query: {
		items() {
			const items = getItems()
			return items.items
		},
		item(_, { id }) {
			const items = getItems()
			const item = items.items.find(item => item.id === id)
			return item
		}
	}
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = createSchema({
	typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
	resolvers
})
