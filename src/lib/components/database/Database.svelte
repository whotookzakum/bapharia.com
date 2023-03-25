<script>
	import Result from "./Result.svelte";
	import Search from "./Search.svelte";
	import enemyParams from "$lib/ntdata/enemyparams.json";
	import jpText from "$lib/ntdata/texts_ja_JP.json";
	import _ from "lodash";

	// Manually add some values:
		// name

	let enemyParamText = jpText.find(
		(entry) => entry.name === "enemyparam_text"
	);

	let allItems = enemyParams.map((item) => {
		return {
			...item,
			name: enemyParamText.texts.find(
				(enemy) => enemy.id === item.name_id
			).text,
		};
	}).filter((item, index) => { return index < 600000 }); // 6 per page

	let selectedItem = allItems[1];

	// items = _.uniqBy(items, (item) => item.name);
</script>

<h2 id="db">Database</h2>
<div class="db-wrapper">
	<Search {allItems} bind:selectedItem />
	<Result bind:item={selectedItem} />
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
