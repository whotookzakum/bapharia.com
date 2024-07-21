import { sveltekit } from '@sveltejs/kit/vite';
import { isoImport } from 'vite-plugin-iso-import'

const config = {
	plugins: [
		isoImport(), 
		sveltekit()
	],
	ssr: {
		noExternal: ['chart.js'],
	},
	server: {
		fs: {
			allow: [".."]
		}
	}
};

export default config;
