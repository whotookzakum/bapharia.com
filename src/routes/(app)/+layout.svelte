<script>
    import PageFooter from '$lib/components/PageFooter.svelte';
</script>

<div class="contents">
	<main id="main" tabindex="-1">
		<slot />
	</main>
	<PageFooter />
</div>

<style>
	.contents {
		max-width: 1400px;
		display: grid;
		width: 100%;
		gap: var(--space-xl);
		padding: 0 1rem;
		margin: 0 auto;
	}
</style>