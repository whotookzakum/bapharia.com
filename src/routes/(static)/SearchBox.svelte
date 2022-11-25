<script>
	import { databaseQuery } from '../../lib/stores';
</script>

<div id="search-box-wrapper">
	<label for="search-box">Search</label>
	<input id="search-box" type="text" placeholder="Search by item name or id" on:input={(e) => databaseQuery.set(e.target.value)} />
</div>

<style lang="scss">
	#search-box-wrapper {
		margin-bottom: 2rem;
	}

    label[for='search-box'] {
		text-transform: uppercase;
		color: var(--text2);
		font-size: var(--step--1);
		display: block;
	}

	input#search-box {
		background: none;
		border: none;
		background: var(--surface2);
		padding: 1rem;
        width: 100%;
		font: inherit;
		border-radius: 5px;
		box-shadow: 0 2px 10px var(--surface-shadow);
		margin-top: 0.5rem;

		&::placeholder {
			color: var(--text2);
		}

		&:focus {
			outline: 2px solid var(--accent);
		}
	}
</style>
