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
	
</style>