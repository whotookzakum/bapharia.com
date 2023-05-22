import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
<<<<<<< HEAD
// import houdini from 'houdini/vite'
import { isoImport } from 'vite-plugin-iso-import'

const config: UserConfig = {
	plugins: [isoImport(),  sveltekit()]
=======

const config: UserConfig = {
	plugins: [sveltekit()]
>>>>>>> bcbc495587ac3ffd2872f9134abda2b4d0098f42
};

export default config;
