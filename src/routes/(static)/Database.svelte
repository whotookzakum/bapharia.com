<script>
	import SectionHeader from './SectionHeader.svelte';
	import SearchResultsList from './SearchResultsList.svelte';
	import SearchBox from './SearchBox.svelte';
	import SearchFilters from './SearchFilters.svelte';
</script>

<section>
	<SectionHeader text="Database" />
	<SearchFilters />
	<SearchBox />
    <SearchResultsList />
</section>

<style lang="scss">
	section {
		max-width: 800px;
		margin: auto;
		min-height: 50vh;
	}
</style>
