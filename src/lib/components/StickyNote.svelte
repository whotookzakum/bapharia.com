<script>
	export let type;
	export let style;
</script>

<aside class="sticky-note box {type}" {style}>
	<header class="box">{type}</header>
	<slot />
</aside>

<style lang="scss">
	.sticky-note {
		background: var(--color-bg, hsla(210, 77%, 50%, 0.5));
		padding: var(--space-xs);
		margin: 1rem 0;
		font-size: var(--step-1);
		max-inline-size: var(--text-length);
		line-height: 1.75;
	}

	header {
		background: rgb(22, 22, 22, 0.9);
		border-radius: 0.75rem;
		margin: -0.5rem -0.5rem 1rem -0.5rem;
		text-transform: capitalize;
		color: white;
		font-weight: 700;
	}

	:global(.sticky-note ul) {
		gap: 0.5rem;
	}

	.tip {
		--color-bg: hsla(273, 80%, 60%, 0.5);
	}

	.caution {
		--color-bg: hsla(40, 80%, 60%, 0.5);
	}

	.warning {
		--color-bg: hsla(0, 80%, 60%, 0.5);
	}
</style>
