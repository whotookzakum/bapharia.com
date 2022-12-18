<script>
	import SectionHeader from '../../../routes/SectionHeader.svelte';
	import Results from './Results.svelte';
	import Search from './Search.svelte';
	import Filters from './Filters.svelte';
	import ItemDetails from './ItemDetails.svelte';
</script>

<section class="fullpage">
	<SectionHeader text="Database" />
	<div class="layout">
		<div style="display: flex; flex-direction: column; gap: 1rem;">
			<Search />
			<Filters />
		</div>
		<Results />
		<ItemDetails />
	</div>
</section>

<style lang="scss">
	section {
		// max-width: 800px;
	}
	.layout {
		display: grid;
		grid-template-columns: 25ch 1fr 1fr;
		gap: 2rem;
	}

</style>
