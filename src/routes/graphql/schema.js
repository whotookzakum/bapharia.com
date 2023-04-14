import data from './data/data.js'
import { createSchema } from 'graphql-yoga'
import { getItems } from './resolvers.js'
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// the list of favorites
const favorites = []

export const resolvers = {
	Query: {
		species(_, { id }) {
			return data.species[id - 1]
		},
		async pokemon(_, args) {
			const { connectionFromArray } = await import('../../lib/connections.mjs')

			const connection = connectionFromArray(data.species, args)
			connection.totalCount = data.species.length

			return connection
		},
		favorites() {
			return favorites.map((id) => data.species[id - 1])
		},
		allSpecies() {
			return data.species
		},
		items() {
			const items = getItems()
			return items.items
		},
		item(_, { id }) {
			const items = getItems()
			const item = items.items.find(item => item.id === id)
			return item
		}
	},
	Mutation: {
		toggleFavorite(_, { id }) {
			// if the id is in the list of favorites, remove it
			if (favorites.includes(id)) {
				favorites.splice(favorites.indexOf(id), 1)
			} else {
				favorites.push(id)
			}

			const species = data.species[id - 1]

			// return the species
			return { species }
		}
	},
	Move: {
		type({ type }) {
			return type[0].toUpperCase() + type.slice(1)
		}
	},
	Species: {
		name({ name }) {
			return name.charAt(0).toUpperCase() + name.slice(1)
		},
		types({ types }) {
			return types.map((type) => type.charAt(0).toUpperCase() + type.slice(1))
		},
		favorite({ id }) {
			return favorites.includes(id)
		},
		evolution_chain({ evo_chain }) {
			return evo_chain.map((id) => data.species[id - 1])
		},
		async moves({ moves }, args) {
			const { connectionFromArray } = await import('../../lib/connections.mjs')

			const connection = connectionFromArray(
				moves.map(({ name, ...info }) => ({ ...info, move: data.moves[name] })),
				args
			)
			connection.totalCount = moves.length

			return connection
		}
	}
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = createSchema({
	typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
	resolvers
})
