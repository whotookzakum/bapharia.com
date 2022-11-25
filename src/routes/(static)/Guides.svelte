<script>
	import Card from '../../lib/components/Card.svelte';
	import SectionHeader from './SectionHeader.svelte';
	import { browser } from '$app/environment';
	let showGameSystems, showStrategy, showReferential, guides;

    // Load filters from cache
	if (browser) {
		let cache = JSON.parse(localStorage.getItem('guide-filters'));
		if (cache) {
			showGameSystems = cache.showGameSystems;
			showStrategy = cache.showStrategy;
			showReferential = cache.showStrategy;
		} else {
			showGameSystems = true;
			showStrategy = true;
			showReferential = true;
		}
	}

    // Reactive filters
	$: {
		guides = [
			{
				title: 'Combat',
				href: '/guides/combat',
				category: 'Game Systems',
				caption: 'A brief overview of all mechanics related to combat in BLUE PROTOCOL.',
				bgSrc: 'test.png'
			},
			{
				title: 'Liquid Memories',
				href: '/guides/liquid-memories',
				category: 'Game Systems',
				caption:
					'Liquid Memories are passive buffs that aid you in combat, crafting, and resource gathering.',
				bgSrc: 'liquidmemory.svg'
			},
			{
				title: 'Equipment',
				href: '/guides/equipment',
				category: 'Game Systems',
				caption: 'Detailed breakdowns of gear and their stats.',
				bgSrc: 'op.png'
			},
			{
				title: 'Progression Guide',
				href: '/guides/progression-guide',
				category: 'Strategy',
				caption: 'Suggestions on how to level up quickly and advance through the game.',
				bgSrc: 'char.png'
			},
			{
				title: 'Main Story',
				href: '/guides/main-story',
				category: 'Referential', // Lore
				caption: 'The main story of BLUE PROTOCOL, including the flow of the quest line.',
				bgSrc: '5.png'
			},
			{
				title: 'Upcoming Features',
				href: '/guides/upcoming-features',
				category: 'Referential',
				caption: 'List of features that have been confirmed to be in development.',
				bgSrc: 'head.png'
			},
			{
				title: 'Abnormal Statuses',
				href: '/guides/abnormal-statuses',
				category: 'Referential',
				caption: 'List of known buffs and debuffs.',
				bgSrc: '4.png'
			},
			{
				title: 'Elements',
				href: '/guides/elements',
				category: 'Referential',
				caption: 'List of elements and their effects.',
				bgSrc: '3.png'
			}
		];

		const filters = [
			{
				isShowing: showGameSystems,
				categoryName: 'Game Systems'
			},
			{
				isShowing: showStrategy,
				categoryName: 'Strategy'
			},
			{
				isShowing: showReferential,
				categoryName: 'Referential'
			}
		];

        // Remove guides in a category if the button is unchecked
		filters.forEach((filter) => {
			if (!filter.isShowing) {
				guides = guides.filter((guide) => guide.category !== filter.categoryName);
			}
		});

        // Set filters to cache
		if (browser) {
			let filtersState = {
				showGameSystems: showGameSystems,
				showStrategy: showStrategy,
				showReferential: showReferential
			};
			localStorage.setItem('guide-filters', JSON.stringify(filtersState));
		}
	}
</script>

<section>
	<SectionHeader text="Guides" />
	<label for="filters">Filters</label>
	<div id="filters">
		<input id="checkbox-game-systems" type="checkbox" bind:checked={showGameSystems} />
		<label for="checkbox-game-systems">Game Systems</label>
		<input id="checkbox-strategy" type="checkbox" bind:checked={showStrategy} />
		<label for="checkbox-strategy">Strategy</label>
		<input id="checkbox-referential" type="checkbox" bind:checked={showReferential} />
		<label for="checkbox-referential">Referential</label>
	</div>
	<div class="card-grid">
		{#each guides as guide}
			<Card
				title={guide.title}
				href={guide.href}
				category={guide.category}
				caption={guide.caption}
				bgSrc={guide.bgSrc}
			/>
		{/each}
	</div>
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
		margin-top: 2rem;
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
