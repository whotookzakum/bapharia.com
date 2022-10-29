<script>
	export let title;
	export let href;
	export let category;
	export let caption;
	export let bgSrc;
</script>

<a class="card" href={href}>
	<div class="card-bg">
		<img src={`/images/${bgSrc}`} alt="Card Background" />
	</div>
	<strong class="card-title">{title}</strong>
	<div class="card-caption">
		<h5>{category}</h5>
		<span>{caption}</span>
	</div>
</a>

<style lang="scss">
	.card {
		border: none;
		position: relative;
		min-height: 200px; // 200-300px
		padding: var(--space-xs);
		z-index: 0;
		box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
		box-shadow: 0 4px 14px var(--surface-shadow);
        color: var(--text1-dark);
	}
	.card-title {
		font-size: var(--step-2);
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
			transform: scale(3);
		}

		img[src$='.png'] {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

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
			background: linear-gradient(black, transparent 40%);
			opacity: 0.4;
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
		line-height: 1.3;

		h5 {
			margin: 0;
			font-weight: 400;
			color: var(--accent); 
		}

		span {
			display: block;
			margin-top: var(--space-xs);
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
