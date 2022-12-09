<script>
	$: filters = {
		Consumables: true,
		Cosmetics: true,
		Imagine: true,
		Materials: true,
		Skills: true,
		Weapons: true
	};
</script>

<div id="search-filters-wrapper">
	<div style="display: flex; gap: 1rem">
		<div style="flex: 1">
			<span class="component-label">Item Type</span>
			<menu id="filters" class="box">
				{#each Object.keys(filters) as key}
					<li class={key.toLowerCase()}>
						<input id={`filter-${key.toLowerCase()}`} type="checkbox" bind:checked={filters[key]} />
						<label for={`filter-${key.toLowerCase()}`}><span />{key}</label>
					</li>
				{/each}
			</menu>
		</div>
		<!-- <div style="flex: 1; display: flex; flex-direction: column; gap: 1rem">
			<div>
				<div class="component-label">Class</div>
				<div class="box" style="font-size: var(--step-0);">All</div>
			</div>
			<div>
				<div class="component-label">Level</div>
				<div class="box">1~99</div>
			</div>
		</div> -->
	</div>
</div>

<style lang="scss">
	#filters {
		padding: 0;
		margin: 0;
		list-style: none;
		overflow: hidden;
	}

	label {
		color: var(--text2);
		flex: 1;
		padding: 0.8rem;
		display: block;
		background: var(--surface2);
		user-select: none;
		padding-right: calc(2rem + 18px);
		filter: brightness(0.8);
	}

	li {
		position: relative;

		& + li {
			border-top: 1px solid var(--surface3);
		}
	}

	input[type='checkbox'] {
		// accent-color: currentColor !important;
		accent-color: var(--accent);
		position: absolute;
		z-index: 10;
		top: 0.8rem;
		right: 0.8rem;
		width: 18px;
		height: 18px;

		&:checked + label {
			color: inherit;
			filter: brightness(1);
		}
	}

	// .consumables {
	// 	color: hsl(357, 49%, 50%);
	// }
	// .cosmetics {
	// 	color: hsl(180, 42%, 47%);
	// }
	// .imagine {
	// 	color: hsl(39, 54%, 55%);
	// }
	// .materials {
	// 	color: hsl(128, 45%, 40%);
	// }
	// .skills {
	// 	color: hsl(323, 38%, 46%);
	// }
	// .weapons {
	// 	color: hsl(221, 38%, 46%);
	// }
</style>
