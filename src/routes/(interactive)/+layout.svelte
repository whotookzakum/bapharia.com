<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import '../../lib/styles/globals.scss';
</script>

<Navbar />
<main>
	<slot />
</main>

<style lang="scss">
	main {
		height: calc(100vh - 61px);
        width: 100vw;
	}
</style>