<script>
	import Box from '../../../lib/components/Box.svelte';
	import HeroBanner from '../../../lib/components/HeroBanner.svelte';
	import gameUpdates from '../../../lib/data/gameUpdates.json';
</script>

<HeroBanner title="Game Updates" subtext="A list of updates to the game" />
<div class="box-wrapper">
	{#each gameUpdates as item}
		<Box title={item.date} id={item.version} href="/game-updates" {item} />
	{/each}
</div>

<style lang="scss">
	.box-wrapper {
        margin-top: var(--space-xl);
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}
</style>
