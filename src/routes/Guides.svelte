<script>
	import { userLocale } from "$lib/stores";
	import { browser } from "$app/environment";
	import Card from "$lib/components/Card.svelte";
	export let data;

	const filtersText = {
		"Game Systems": {
			ja_JP: "システム",
			en_US: "Game Systems",
		},
		Strategy: {
			ja_JP: "攻略系",
			en_US: "Strategy",
		},
		Referential: {
			ja_JP: "参考用",
			en_US: "Referential",
		},
	};

	let filters;
	if (browser) {
		filters = JSON.parse(localStorage.getItem("guide-filters"));
	}
	filters ??= {
		// False to hide all by default (server render) or wrap ul.card-grid in {if browser}
		// This will break accessibility if javascript is disabled
		// True to show all by default
		"Game Systems": true,
		Strategy: true,
		Referential: true,
	};

	$: if (browser) {
		localStorage.setItem("guide-filters", JSON.stringify(filters));
	}

	$: guides = data.filter((guide) => filters[guide.meta.category]);
</script>

<h2 id="guides">Guides</h2>
<!-- <span class="component-label">Filters</span>
<div id="guide-filters" class="flex">
	{#each Object.keys(filters) as filter}
		<label class="box hover">
			<input type="checkbox" bind:checked={filters[filter]} />
			{filtersText[filter][$userLocale]}
		</label>
	{/each}
</div> -->
<ul class="card-grid">
	{#each guides as guide}
		<li>
			<Card
				title={guide.meta.title}
				href={guide.path}
				category={guide.meta.category}
				caption={guide.meta.caption}
				bgSrc={guide.meta.featuredImg}
			/>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul.card-grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
		gap: var(--space-s-m);
		padding: 0;
		list-style: none;
		max-width: 100%;
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
