<script>
	import PageFooter from "$lib/components/PageFooter.svelte";
	import { userLocale } from "$lib/stores";
	import { browser } from "$app/environment";
	import Card from "./Card.svelte";
	import MetaTags from "$lib/components/MetaTags.svelte";
	import { fetchMarkdownPosts } from "$lib/utils/index.js";
	import HeroBanner from "$lib/components/HeroBanner.svelte";
	export let data;

	// TODO favorites, filters, sort A-Z/last updated

	const guides = data.guides;

	// const filtersText = {
	// 	"Game Systems": {
	// 		ja_JP: "システム",
	// 		en_US: "Game Systems",
	// 	},
	// 	Strategy: {
	// 		ja_JP: "攻略系",
	// 		en_US: "Strategy",
	// 	},
	// 	Referential: {
	// 		ja_JP: "参考用",
	// 		en_US: "Referential",
	// 	},
	// };

	// let filters;
	// if (browser) {
	// 	filters = JSON.parse(localStorage.getItem("guide-filters"));
	// }
	// filters ??= {
	// 	// False to hide all by default (server render) or wrap ul.card-grid in {if browser}
	// 	// This will break accessibility if javascript is disabled
	// 	// True to show all by default
	// 	"Game Systems": true,
	// 	Strategy: true,
	// 	Referential: true,
	// };

	// $: if (browser) {
	// 	localStorage.setItem("guide-filters", JSON.stringify(filters));
	// }

	// $: guides = data.filter((guide) => filters[guide.meta.category]);
</script>

<MetaTags
	title={`Guides — Bapharia`}
	description={`Guides for BLUE PROTOCOL. Learn about game mechanics, find strategy guides, and check reference sheets!`}
/>

<HeroBanner
	bannerUrl="/UI/Adventurer/UI_AdventurerRank_Mark03.png"
	style="background-size: 339px 345px !important; background-repeat: no-repeat; --backdrop-opacity: 0.5"
>
	<h1>Guides</h1>
	<p style:margin-top="0">
		Guides covering core aspects of BLUE PROTOCOL—game mechanics, strategy
		guides, and reference sheets. More guides can be found on our <a
			href="/discord">discord</a
		>!
	</p>
</HeroBanner>

<!-- <span class="component-label">Filters</span>
<div id="guide-filters" class="flex">
	{#each Object.keys(filters) as filter}
		<label class="box hover">
			<input type="checkbox" bind:checked={filters[filter]} />
			{filtersText[filter][$userLocale]}
		</label>
	{/each}
</div> -->
<ul class="card-grid unstyled-list" role="list">
	{#each guides as guide}
		<li>
			<Card {guide} />
		</li>
	{/each}
</ul>

<style lang="scss">
	.contents {
		max-width: var(--content-width);
		display: grid;
		width: 100%;
		gap: var(--space-xl);
		padding: 0 1rem;
		margin: 0 auto;
	}

	ul.card-grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-s-m);
		margin: var(--space-s-m) 0;
		max-width: 100%;

		li {
			max-inline-size: none;
		}
	}

	#guide-filters {
		flex-wrap: wrap;
		gap: var(--space-3xs);

		label.box {
			padding: 0.5rem 0.75rem;
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;

			&:has(input:checked) {
				border-color: var(--accent);
				background: var(--surface2);
			}
		}
	}
</style>
