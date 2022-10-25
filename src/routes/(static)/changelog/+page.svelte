<script>
	import Box from '../../../lib/components/Box.svelte';
	import HeroBanner from '../../../lib/components/HeroBanner.svelte';
	import changelog from '../../../lib/data/changelog.json';
</script>

<HeroBanner title="Changelog" subtext="A list of all changes to the site" />
<div class="box-wrapper">
	{#each changelog as item}
		<Box title={item.date} id={item.version} href="/changelog" {item} />
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
