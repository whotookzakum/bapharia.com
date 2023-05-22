<<<<<<< HEAD
import adapter from '@sveltejs/adapter-cloudflare';
=======
import adapter from '@sveltejs/adapter-static';
>>>>>>> bcbc495587ac3ffd2872f9134abda2b4d0098f42
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
<<<<<<< HEAD
			extensions: ['.md', '.mdx', '.svx'],
=======
			extensions: ['.md'],
>>>>>>> bcbc495587ac3ffd2872f9134abda2b4d0098f42
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{ behavior: 'append' }
				],
				[
					rehypeToc,
					{}
				]
			]
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