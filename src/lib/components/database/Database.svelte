<script>
	import Result from "./Result.svelte";
	import Search from "./Search.svelte";
</script>

<h2 id="db">Database</h2>
<div class="db-wrapper">
	<Search />
	<!-- <Result bind:item={selectedItem} /> -->
</div>

<style lang="scss">
	.db-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 800px) {
		.db-wrapper {
			grid-template-columns: 1fr;
		}
	} 
</style>
