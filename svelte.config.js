import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: '/src/routes/guides/Guide.svelte'
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
            $houdini: path.resolve('.', '$houdini')
        }
	}
};

export default config;