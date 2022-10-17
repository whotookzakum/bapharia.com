<script>
	import HeroBanner from '../../lib/components/HeroBanner.svelte';
	import Card from '../../lib/components/Card.svelte';
	import { t } from '../../lib/functions/i18n';
	import en from '/src/lib/locales/en/pages/guides.json';
	const resource = en;

	const guidesMetadata = [
		{
			title: 'Combat',
			category: 'Game Systems',
			caption: 'A brief overview of all mechanics related to combat in BLUE PROTOCOL.',
			bgSrc: 'test.png'
		},
		{
			title: 'Liquid Memories',
			category: 'Game Systems',
			caption:
				'Liquid Memories are passive buffs that aid you in combat, crafting, and resource gathering.',
			bgSrc: 'liquidmemory.svg'
		},
		{
			title: 'Equipment',
			category: 'Game Systems',
			caption: 'Detailed breakdowns of gear and their stats.',
			bgSrc: 'op.png'
		},
		{
			title: 'Progression Guide',
			category: 'Strategy',
			caption: 'Suggestions on how to level up quickly and advance through the game.',
			bgSrc: 'char.png'
		},
		{
			title: 'Main Story',
			category: 'Lore',
			caption: 'The main story of BLUE PROTOCOL, including the flow of the quest line.',
			bgSrc: 'msq.svg'
		},
		{
			title: 'Upcoming Features',
			category: 'Referential',
			caption: 'List of features that have been confirmed to be in development.',
			bgSrc: 'head.png'
		}
	];

	const guideCategories = ['Game Systems', 'Strategy', 'Referential'];

	function getGuidesByCategory(category) {
		return guidesMetadata.filter((guide) => guide.category === category);
	}
</script>

<HeroBanner title={t('pageTitle', resource)} subtext={t('pageSlug', resource)} />

{#each guideCategories as category}
	<section>
		<h3>{category}</h3>
		<div class="card-grid">
			{#each getGuidesByCategory(category) as guide}
				<Card
					title={guide.title}
					category={guide.category}
					caption={guide.caption}
					bgSrc={guide.bgSrc}
				/>
			{/each}
		</div>
	</section>
{/each}

<style lang="scss">
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
		gap: var(--space-s-m);
	}

	h3 {
		margin-bottom: var(--space-s);
	}
</style>
