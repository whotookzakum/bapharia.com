<script>
	import Navbar from '../../lib/components/Navbar.svelte';
	import '../../lib/styles/globals.scss';
	import CommandMenu from './CommandMenu.svelte';
</script>

<!-- <Navbar /> -->

<main>
	<CommandMenu />
	<div id="interactive-page">
		<slot />
	</div>
</main>

<style lang="scss">
	main {
		// height: calc(100vh - 61px);
		min-height: 100vh;
        width: 100vw;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		margin: auto;
		background: radial-gradient(rgb(15, 66, 75) 40%, rgb(7, 43, 49));
		color: white;
	}
	#interactive-page {
		display: flex;
		flex: 1;
		max-width: 1600px;
		position: relative;
		z-index: 10;
	}
</style>