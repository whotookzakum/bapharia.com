import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
// import houdini from 'houdini/vite'
import { isoImport } from 'vite-plugin-iso-import'

const config: UserConfig = {
	plugins: [isoImport(),  sveltekit()]
};

export default config;
