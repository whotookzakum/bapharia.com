<script>
	import '$lib/styles/globals.scss';
	import Navbar from "$lib/components/navigation/Navbar.svelte";
</script>

<div class="container">
	<Navbar />
	<slot />
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: auto 1fr;
	}
</style>