<script>
	import HeroBanner from '../../lib/components/HeroBanner.svelte';
	import Card from '../../lib/components/Card.svelte';
	import { t } from '../../lib/functions/i18n';
	import en from '/src/lib/locales/en/pages/guides.json';
	// import ja from '/src/lib/locales/ja/pages/guides.json';
	const resource = en;

</script>

<HeroBanner title={t('pageTitle', resource)} subtext={t('pageSlug', resource)} />
<!-- <h3>Referential</h3> -->
<div class="card-grid">
	<Card
		title="Combat"
		category="Game Systems"
		caption="A brief overview of all mechanics related to combat in BLUE PROTOCOL."
		bgSrc="test.png"
	/>
	<Card
		title="Liquid Memories"
		category="Game Systems"
		caption="Liquid Memories are passive buffs that aid you in combat, crafting, and resource gathering."
		bgSrc="liquidmemory.svg"
	/>
	<Card
		title="Main Story"
		category="Lore"
		caption="The main story of BLUE PROTOCOL, including the flow of the quest line."
		bgSrc="msq.svg"
	/>
	<Card
		title="Equipment"
		category="Game Systems"
		caption="Detailed breakdowns of gear and their stats."
		bgSrc="op.png"
	/>
	<Card
		title="Progression Guide"
		category="Strategy"
		caption="Suggestions on how to level up quickly and advance through the game."
		bgSrc="char.png"
	/>
	<Card
		title="Upcoming Features"
		category="Referential"
		caption="List of features that have been confirmed to be in development."
		bgSrc="head.png"
	/>
</div>

<style lang="scss">
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
		gap: var(--space-s-m);
	}
</style>
