<script>
	import { databaseQuery } from '$lib/stores';
</script>

<div id="search-box-wrapper">
	<label class="component-label" for="search-box">Search</label>
	<input class="box" id="search-box" type="text" placeholder="Search by item name or id" on:input={(e) => databaseQuery.set(e.target.value)} />
</div>

<style lang="scss">
	#search-box {
		border: none;
        width: 100%;
		font: inherit;

		&::placeholder {
			color: var(--text2);
		}

		&:focus {
			outline: 2px solid var(--accent);
		}
	}
</style>
