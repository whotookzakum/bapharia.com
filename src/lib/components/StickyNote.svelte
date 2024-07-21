<script>
	export let type;
	export let style;
</script>

<aside
	class="sticky-note p-4 rounded-2xl"
	style:background="var(--bg-{type}, hsla(210, 77%, 50%, 0.5))"
	{style}
>
	<header class="p-4 rounded-2xl">{type}</header>
	<slot />
</aside>

<style lang="scss">
	.sticky-note {
		--bg-tip: hsla(273, 80%, 60%, 0.5);
		--bg-caution: hsla(40, 80%, 60%, 0.5);
		--bg-warning: hsla(0, 80%, 60%, 0.5);
		margin: 1rem 0;
		max-inline-size: var(--text-length);
	}

	header {
		background: rgb(22, 22, 22, 0.9);
		border-radius: 0.75rem;
		margin: -0.25rem -0.25rem 1rem -0.25rem;
		text-transform: capitalize;
		color: white;
		font-weight: 700;
	}
</style>
