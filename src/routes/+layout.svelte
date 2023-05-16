<script>
	import '$lib/styles/globals.scss';
	import Navbar from "$lib/components/navigation/Navbar.svelte";
    import PageFooter from '$lib/components/PageFooter.svelte';
</script>

<div class="layout">
	<Navbar />
	<div class="contents">
		<main id="#main" tabindex="-1">
			<slot />
		</main>
		<PageFooter />
	</div>
</div>


<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: auto 1fr;
	}

	.contents {
		max-width: 1400px;
		display: grid;
		width: 100%;
		gap: var(--space-xl);
		padding: 0 1em;
		margin: auto;
	}
</style>