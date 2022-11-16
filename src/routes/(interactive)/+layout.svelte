<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import '../../lib/styles/globals.scss';
	import CommandMenu from './CommandMenu.svelte';
</script>

<Navbar />

<main>
	<CommandMenu />
	<slot />
</main>

<style lang="scss">
	main {
		height: calc(100vh - 61px);
        width: 100vw;
	}
</style>