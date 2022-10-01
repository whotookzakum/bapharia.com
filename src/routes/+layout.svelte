<script>
	import Navbar from '../lib/components/Navbar.svelte';
	import PageFooter from '../lib/components/PageFooter.svelte';
	import '../lib/styles/globals.scss';
</script>

<Navbar />
<main>
	<slot />
	<PageFooter />
</main>
