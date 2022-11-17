<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import PageFooter from '../../lib/components/PageFooter.svelte';
	import HeroBanner from '../../lib/components/HeroBanner.svelte';
	import '../../lib/styles/globals.scss';
</script>

<Navbar />
<!-- <HeroBanner title="Bapharia" subtext="The ultimate BLUE PROTOCOL information base." /> -->
<main>
	<slot />
</main>
<PageFooter />

<style>
	main {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1em;
		min-height: 60vh;
	}
</style>
