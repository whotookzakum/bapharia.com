<div id="search-filters-wrapper">
	<label for="filters">Filters</label>
	<menu id="filters">
		<li>
			<input id="filter-consumables" type="checkbox" checked />
			<label for="filter-consumables">
				<span>Consumables</span>
				<div class="checkbox" />
			</label>
		</li>
		<li>
			<input id="filter-cosmetics" type="checkbox" checked />
			<label for="filter-cosmetics">
				<span>Cosmetics</span>
				<div class="checkbox" />
			</label>
		</li>
		<li>
			<input id="filter-imagine" type="checkbox" checked />
			<label for="filter-imagine">
				<span>Imagine</span>
				<div class="checkbox" />
			</label>
		</li>
		<li>
			<input id="filter-materials" type="checkbox" checked />
			<label for="filter-materials">
				<span>Materials</span>
				<div class="checkbox" />
			</label>
		</li>
		<li>
			<input id="filter-skills" type="checkbox" checked />
			<label for="filter-skills">
				<span>Skills</span>
				<div class="checkbox" />
			</label>
		</li>
		<li>
			<input id="filter-weapons" type="checkbox" checked />
			<label for="filter-weapons">
				<span>Weapons</span>
				<div class="checkbox" />
			</label>
		</li>
	</menu>
</div>

<style lang="scss">
	#search-filters-wrapper {
		margin-bottom: 2rem;
	}

	label[for='filters'] {
		text-transform: uppercase;
		color: var(--text2);
		font-size: var(--step--1);
		display: block;
	}

	#filters {
		margin: 0;
		padding: 0;
		list-style: none;
		min-width: 200px;
		box-shadow: 0 2px 10px var(--surface-shadow);
		border-radius: var(--border-radius);
		margin-top: 0.5rem;
		--border-radius: 5px;

		label {
			color: var(--text2);
			padding: 0.75rem;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: var(--surface2);
			user-select: none;
		}

		li:first-child label {
			border-top-left-radius: var(--border-radius);
			border-top-right-radius: var(--border-radius);
		}

		li:last-child label {
			border-bottom-left-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
		}

		input[type='checkbox'] {
			display: none;

			&:checked + label {
				color: var(--text1);
				filter: brightness(1.1);

				&[for='filter-consumables'] .checkbox {
					background: hsl(357, 49%, 50%);
				}

				&[for='filter-cosmetics'] .checkbox {
					background: hsl(180, 42%, 47%);
				}

				&[for='filter-imagine'] .checkbox {
					background: hsl(39, 54%, 55%);
				}

				&[for='filter-materials'] .checkbox {
					background: hsl(128, 45%, 40%);
				}

				&[for='filter-skills'] .checkbox {
					background: hsl(323, 38%, 46%);
				}

				&[for='filter-weapons'] .checkbox {
					background: hsl(221, 38%, 46%);
				}
			}
		}

		li:not(:last-of-type) {
			border-bottom: 1px solid var(--surface3);
		}

		.checkbox {
			width: 16px;
			height: 16px;
			background: transparent;
			// border: 2px solid rgb(109, 109, 109);
			position: relative;
			border-radius: 50%;

			&::after {
				content: '';
				position: absolute;
				width: 0px;
				height: 0px;
				transform: rotate(0deg) translate(-50%, -50%);
				left: calc(50%);
				top: calc(50% - 4px);
			}
		}
	}
</style>
