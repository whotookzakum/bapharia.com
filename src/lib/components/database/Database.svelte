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
	});

	// items = _.uniqBy(items, (item) => item.name);
</script>

<div class="db-wrapper">
	<Search {allItems} />
	<Result item={allItems[1]} />
</div>

<style lang="scss">
	.db-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
</style>
