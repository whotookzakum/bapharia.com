<script>
	import Card from "$lib/components/Card.svelte";
	import { localStorageStore } from "fractils";
	export let data;

	let guideFilters = localStorageStore("guide-filters", {
		"Game Systems": true,
		Strategy: true,
		Referential: true,
	});

	$: guides = data.filter((guide) => $guideFilters[guide.meta.category]);
</script>

<h2 id="guides">Guides</h2>
<div class="grid g-50">
	<span class="component-label">Filters</span>
	<div id="filters" class="flex">
		<label class="box hover">
			<input
				type="checkbox"
				bind:checked={$guideFilters["Game Systems"]}
			/>
			Game Systems
		</label>
		<label class="box hover">
			<input type="checkbox" bind:checked={$guideFilters["Strategy"]} />
			Strategy
		</label>
		<label class="box hover">
			<input
				type="checkbox"
				bind:checked={$guideFilters["Referential"]}
			/>
			Referential
		</label>
	</div>
</div>
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

	#filters {
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
