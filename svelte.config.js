import adapter from '@sveltejs/adapter-cloudflare';
// https://stackoverflow.com/questions/75056422/how-to-use-vitepreprocess-with-global-scss-mixins-in-sveltekit
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeSectionize from "@hbsnow/rehype-sectionize";
import { SUPPORTED_PUBLISHERS, SUPPORTED_LANGS } from "./src/lib/constants.js"
import remarkMath from "remark-math";
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeRaw from "rehype-raw";

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
			remarkPlugins: [
				remarkMath
			],
			rehypePlugins: [
				// rehypeRaw,
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
				rehypeKatexSvelte
			],
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$api: path.resolve('.', '_api'),
			$bp_api: path.resolve('.', '_api/bp_api'),
			$bp_client: path.resolve('.', '_api/bp_client'),
		},
		prerender: {
			handleHttpError: "ignore",
			handleMissingId: "ignore",
			entries:
				SUPPORTED_PUBLISHERS.flatMap(publisher =>
					SUPPORTED_LANGS.map(lang => {
						let route = `/${publisher}/${lang}`
							.replace(`/${SUPPORTED_PUBLISHERS[0]}`, "")
							.replace(`/${SUPPORTED_LANGS[0]}`, "")
						if (route.length < 1) route = "/"
						return route
					})),
			entries: ["/api"]
		}
	},
};

export default config;