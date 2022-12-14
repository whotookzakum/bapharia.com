<script>
	export let title;
	export let href;
	export let category;
	export let caption;
	export let bgSrc;
</script>

<a class="card" {href}>
	<div class="card-bg">
		<img src={`/images/${bgSrc}`} alt="Card Background" />
	</div>
	<h3 class="card-title">{title}</h3>
	<div class="card-caption">
		<span class="category">{category}</span>
		<span>{caption}</span>
	</div>
</a>

<style lang="scss">
	.card {
		display: block;
		border: none;
		position: relative;
		min-height: 200px;
		padding: var(--space-xs);
		z-index: 0;
		box-shadow: 0 3px 6px var(--surface-shadow); // same as .box
		color: var(--text1-dark);
		line-height: normal;
	}
	.card-title {
		font-size: var(--step-2);
		margin: 0;
		line-height: unset;
		font-weight: bolder;
		letter-spacing: unset;
		
	}
	.card-bg {
		position: absolute;
		z-index: -1;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;

		img[src$='.svg'] {
			transform: scale(2);
		}

		img[src$='.png'] {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		// Before: top shadow on card
		// After: background
		&::before,
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			display: block;
			width: 100%;
			height: 100%;
			transition: opacity 0.1s ease-in-out;
		}

		&::before {
			background: linear-gradient(black, transparent 50%);
			opacity: 0.5;
		}

		&::after {
			background: black;
			opacity: 0.2;
		}
	}
	.card-caption {
		opacity: 0;
		transform: translateY(20%);
		transition: all 0.1s ease-in-out;
		font-weight: bolder;
		display: grid;
		gap: var(--space-2xs);

		.category {
			color: var(--accent);
			font-size: var(--step-0);
		}
	}
	.card:hover {
		.card-bg {
			&::before {
				opacity: 0;
			}
			&::after {
				opacity: 0.85;
			}
		}
		.card-caption {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
