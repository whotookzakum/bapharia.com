import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from "@jsdevtools/rehype-toc";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.mdx', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.mdx', '.svx'],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{ behavior: 'append' }
				],
				// [
				// 	rehypeToc,
				// 	{}
				// ]
			]
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$houdini: path.resolve('.', '$houdini'),
			$bp_client: path.resolve('.', 'src/bp_client'),
			$bp_server: path.resolve('.', 'src/bp_server'),
		}
	}
};

export default config;