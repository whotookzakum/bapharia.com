<script>
    import '$lib/styles/globals.scss';
    import Navbar from "$lib/components/navigation/Navbar.svelte";
    import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
</script>

<GoogleAnalytics properties={['G-WFYTLGB8B9']} />

<div class="layout">
	<Navbar />
	<slot />
</div>


<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: flex-start;
	}
</style>