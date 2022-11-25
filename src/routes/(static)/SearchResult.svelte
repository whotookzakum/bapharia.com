<script>
	export let item;
</script>

<li class="search-result-item">
	<div class="result-inner">
		<img src={`/images/${item.imgSrc}`} alt="Item Icon" width="64px" height="64px" />
		<div>
			<span class="item-name">{item.name}</span>
			<br />
			<span class="item-type">{item.type}</span>
			<br />
			<span class="item-id">ID: {item.id}</span>
		</div>
	</div>
</li>

<style lang="scss">
    li.search-result-item {
		padding: 1rem;

		&:not(:last-child) {
			border-bottom: 1px solid var(--surface3);
		}
	}

	div.result-inner {
		display: flex;
		gap: 1rem;
	}

	.item-id,
	.item-type {
		color: var(--text2);
		font-size: var(--step--1);
	}
</style>