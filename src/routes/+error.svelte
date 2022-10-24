<script>
	import Navbar from '../lib/components/Navbar.svelte';
	import PageFooter from '../lib/components/PageFooter.svelte';
	import HeroBanner from '../lib/components/HeroBanner.svelte';
	import '../lib/styles/globals.scss';
	import { page } from '$app/stores';
</script>

<Navbar />
<main>
	<HeroBanner title={$page.status} subtext="The requested page could not be found." />
	<p>
		Check to make sure the URL is correct. 
        If you think this is a mistake, let us know on <a href="https://discord.gg/ZKwhn3a4yH" target="_blank" rel="noopener noreferrer">Discord</a>.
	</p>
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
