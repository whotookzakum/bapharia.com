<script>
	import Card from '$lib/components/Card.svelte';
	import { localStorageStore } from 'fractils';
	export let data;

	let guideFilters = localStorageStore('guide-filters', {
		'Game Systems': true,
		Strategy: true,
		Referential: true
	});

	$: guides = data.filter((guide) => $guideFilters[guide.meta.category])
</script>

<section>
	<span class="component-label">Filters</span>
	<div id="filters">
		<input
			id="checkbox-game-systems"
			type="checkbox"
			bind:checked={$guideFilters['Game Systems']}
		/>
		<label class="box" for="checkbox-game-systems">Game Systems</label>
		<input id="checkbox-strategy" type="checkbox" bind:checked={$guideFilters['Strategy']} />
		<label class="box" for="checkbox-strategy">Strategy</label>
		<input id="checkbox-referential" type="checkbox" bind:checked={$guideFilters['Referential']} />
		<label class="box" for="checkbox-referential">Referential</label>
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
</section>

<style lang="scss">
	section {
		// max-width: 1000px;
	}

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
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3xs);

		label {
			padding: 0.5rem 1rem;
			border: 1px solid transparent;
			color: var(--text2);
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}

		input[type='checkbox'] {
			display: none;
			appearance: none;

			&:checked + label {
				color: var(--text1);
				border-color: var(--accent);
			}
		}
	}
</style>
