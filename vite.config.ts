import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { isoImport } from 'vite-plugin-iso-import'

const config: UserConfig = {
	plugins: [isoImport(),  sveltekit()]

const config: UserConfig = {
	plugins: [sveltekit()]
};

export default config;
