<script>
	import Result from "./Result.svelte";
	import Search from "./Search.svelte";
</script>

<div class="db-wrapper">
	<Search />
	<Result />
</div>

<style lang="scss">
	.db-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
</style>
