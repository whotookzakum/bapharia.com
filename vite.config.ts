import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { isoImport } from 'vite-plugin-iso-import'

const config: UserConfig = {
	plugins: [isoImport(), sveltekit()],
	ssr: {
		noExternal: ['chart.js'],
	},
};

export default config;
