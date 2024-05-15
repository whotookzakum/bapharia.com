<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
</script>

<MetaTags
	title="Guides — Bapharia"
	description="Guides for BLUE PROTOCOL. Learn about game mechanics, find strategy guides, and check reference sheets!"
/>

<article class="main-pane">
	<h1>Hello world</h1>
	<h2>Hello</h2>
</article>

<style lang="scss">
	ul.card-grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-s-m);
		margin: var(--space-s-m) 0;
		max-width: 100%;

		li {
			max-inline-size: none;
		}
	}
</style>
