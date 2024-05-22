import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
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
		vitePreprocess(),
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
							list: "unstyled-list",
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
			$bp_client: path.resolve('.', 'bp_client'),
			$bp_server: path.resolve('.', 'bp_server'),
			$functions: path.resolve('.', 'functions'),
		}
	},
};

export default config;