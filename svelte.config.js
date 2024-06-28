import adapter from '@sveltejs/adapter-static';
// https://stackoverflow.com/questions/75056422/how-to-use-vitepreprocess-with-global-scss-mixins-in-sveltekit
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeSectionize from "@hbsnow/rehype-sectionize";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	onwarn: (warning, handler) => {
		if (warning.code === "a11y-no-redundant-roles") {
			return
		}
		handler(warning)
	},
	extensions: ['.svelte', '.md', '.mdx', '.svx'],
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.mdx', '.svx'],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{ behavior: 'append' }
				],
				[
					rehypeToc,
					{
						headings: ["h2"], cssClasses: {
							link: "styled-link"
						}
					}
				],
				rehypeSectionize,
			]
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$api: path.resolve('.', 'api'),
			$bp_api: path.resolve('.', 'api/bp_api'),
			$bp_client: path.resolve('.', 'api/bp_client'),
		},
		prerender: {
			handleHttpError: "ignore",
			handleMissingId: "ignore"
		}
	},
};

export default config;