<script>
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from './SectionHeader.svelte';
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
	<SectionHeader text="Guides" />
	<label for="filters">Filters</label>
	<div id="filters">
		<input
			id="checkbox-game-systems"
			type="checkbox"
			bind:checked={$guideFilters['Game Systems']}
		/>
		<label for="checkbox-game-systems">Game Systems</label>
		<input id="checkbox-strategy" type="checkbox" bind:checked={$guideFilters['Strategy']} />
		<label for="checkbox-strategy">Strategy</label>
		<input id="checkbox-referential" type="checkbox" bind:checked={$guideFilters['Referential']} />
		<label for="checkbox-referential">Referential</label>
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
		// max-width: 800px;
		margin: auto;
		min-height: 80vh;
	}

	.card-grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
		gap: var(--space-s-m);
		padding: 0;
		list-style: none;
	}

	label[for='filters'] {
		text-transform: uppercase;
		color: var(--text2);
		font-size: var(--step--1);
		display: block;
	}

	#filters {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3xs);
		margin-top: 0.5rem;

		label {
			background: var(--surface2);
			padding: 0.5rem 1rem;
			border: 1px solid var(--surface1);
			border-radius: 0.3rem;
			box-shadow: 0 2px 4px var(--surface-shadow);
			color: var(--text2);
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}

		input[type='checkbox'] {
			display: none;

			&:checked + label {
				color: var(--text1);
				border-color: var(--accent);
			}
		}
	}
</style>
