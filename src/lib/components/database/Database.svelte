<script>
	import SectionHeader from '../../../routes/SectionHeader.svelte';
	import Results from './Results.svelte';
	import Search from './Search.svelte';
	import Filters from './Filters.svelte';
</script>

<section>
	<SectionHeader text="Database" />
	<div class="layout">
		<div style="display: flex; flex-direction: column; gap: 1rem;">
			<Search />
			<Filters />
		</div>
		<Results />
	</div>
</section>

<style lang="scss">
	section {
		max-width: 800px;
		margin: auto;
		min-height: 50vh;
	}
	.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		flex: 1;
	}

	section {
		max-width: unset;
	}

	.layout {
		grid-template-columns: 25ch 1fr 1fr;
		
		div:nth-of-type(2) {
			grid-column: span 2;
		}
	}
</style>
