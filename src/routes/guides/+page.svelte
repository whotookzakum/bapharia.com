<script>
	import { onMount } from 'svelte';
	import HeroBanner from '../../lib/components/HeroBanner.svelte';
	import Card from '../../lib/components/Card.svelte';
	import { t } from '../../lib/functions/i18n';
	import en from '/src/lib/locales/en/pages/guides.json';
	// import ja from '/src/lib/locales/ja/pages/guides.json';
	const resource = en;

	onMount(() => {
		console.log(navigator.language);
	});
</script>

<HeroBanner title={t('pageTitle', resource)} subtext={t('pageSlug', resource)} />
<div class="card-grid">
	<Card
		title="Combat"
		category="Game Systems"
		caption="In this guide we will briefly go over the mechanics of combat in BLUE PROTOCOL."
		bgSrc="test.png"
	/>
	<Card
		title="Liquid Memories"
		category="Game Systems"
		caption="The Liquid Memory system allows you to activate passive buffs that aid you in combat, crafting, and resource gathering."
		bgSrc="liquidmemory.svg"
	/>
	<Card
		title="Main Story"
		category="Lore"
		caption="An overview of the main story in BLUE PROTOCOL, including the flow of the quest line."
		bgSrc="msq.svg"
	/>
	<Card
		title="Gear"
		category="Game Systems"
		caption="In this guide we will briefly go over the mechanics of combat in BLUE PROTOCOL."
		bgSrc="op.png"
	/>
	<Card
		title="Progression Guide"
		category="Strategy"
		caption="The Liquid Memory system allows you to activate passive buffs that aid you in combat, crafting, and resource gathering."
		bgSrc="char.png"
	/>
	<Card
		title="Upcoming Features"
		category="Referential"
		caption="An overview of the main story in BLUE PROTOCOL, including the flow of the quest line."
		bgSrc="head.png"
	/>
</div>

<style lang="scss">
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
		gap: var(--space-m);
	}
</style>
