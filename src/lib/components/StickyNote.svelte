<script>
	import Icon from '@iconify/svelte';

	export let type;
</script>

<aside class="sticky-note {type}">
	<i class="sticky-note-type">
		{#if type === 'note'}
			<!-- tabler:clipboard-text -->
			<Icon icon="material-symbols:sticky-note-2-outline-rounded" width="24" height="24" />
		{:else if type === 'tip'}
			<!-- heroicons-outline:light-bulb -->
			<Icon icon="material-symbols:tips-and-updates-outline" width="24" height="24" />
		{:else if type === 'caution'}
			<!-- tabler:alert-triangle -->
			<Icon icon="material-symbols:warning-outline-rounded" width="24" height="24" />
		{:else if type === 'warning'}
			<!-- tabler:alert-octagon -->
			<Icon icon="mdi:alert-octagon-outline" width="24" height="24" />
		{/if}
		{type}
	</i>
	<slot />
</aside>

<style lang="scss">
	.sticky-note {
		--color-bg: rgb(34, 51, 99);
		--color-border: rgb(24, 127, 187);
		color: var(--text1-dark);
		background: var(--color-bg);
		padding: var(--space-xs);
		margin: var(--space-m) 0;
		border-left: 4px solid var(--color-border);
		box-shadow: 0 2px 8px var(--surface-shadow);
		transition: var(--transition-shadow);
		line-height: 1.5;
	}

	.sticky-note-type {
		--type-text-color: var(--text2-dark);
		font-style: normal;
		font-size: var(--step--1);
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-bottom: var(--space-3xs);
		text-transform: uppercase;
		color: var(--text2-dark);
	}

	.tip {
		--color-bg: rgb(70, 34, 99);
		--color-border: rgb(135, 24, 187);
	}

	.caution {
		--color-bg: rgb(99, 78, 34);
		--color-border: rgb(187, 149, 24);
		--type-text-color: hsl(240, 5%, 78%);
	}

	.warning {
		--color-bg: rgb(99, 34, 34);
		--color-border: rgb(187, 24, 24);
	}
</style>
