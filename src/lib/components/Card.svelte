<script>
	import Icon from "@iconify/svelte";

	export let title;
	export let href;
	export let category;
	export let caption;
	export let bgSrc;

	let isFavorited = false;
</script>

<div class="card">
	<a class="box" {href}>
		<img
			class="card-bg"
			src={`/images/${bgSrc}`}
			alt="Card Background"
			loading="lazy"
		/>
		<h3 class="card-title">{title}</h3>
		<div class="card-caption">
			<strong class="category">{category}</strong>
			<span>{caption}</span>
		</div>
	</a>
	<label class="favorite">
		<input
			type="checkbox"
			class="visually-hidden"
			bind:checked={isFavorited}
		/>
		<span>
			<Icon
				icon={isFavorited ? "mdi:heart" : "mdi:heart-outline"}
				width="24"
				height="24"
			/>
		</span>
	</label>
</div>

<style lang="scss">
	.card {
		position: relative;	
	}

	a {
		display: block;
		border: none;
		position: relative;
		min-height: 200px;
		padding: var(--space-xs);
		z-index: 0;
		color: var(--text1);
		line-height: 1.4;

		// &::after {
		// 	content: '';
		// 	position: absolute;
		// 	z-index: -1;
		// 	background: rgb(34, 67, 165);
		// 	border: 1px solid hsl(225, 66%, 59%);
		// 	width: 80px;
		// 	height: 120px;
		// 	bottom: -60px;
		// 	right: -30px;
		// 	transform: rotate(45deg);
		// }
	}

	img.card-bg {
		position: absolute;
		z-index: -1;
		inset: 0;
		transition: filter 0.1s ease-in-out;
		filter: brightness(0.5);
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	h3.card-title {
		font-size: var(--step-1);
		margin: 0;
		font-weight: 500;
		letter-spacing: unset;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
	}

	.card-caption {
		opacity: 0;
		transform: translateY(20%);
		transition: all 0.1s ease-in-out;
		display: grid;
		gap: var(--space-2xs);

		.category {
			color: var(--accent);
			font-size: var(--step-0);
		}
	}

	label.favorite {
		position: absolute;
		z-index: 1;
		bottom: 0.5rem;
		right: 0.5rem;
		background: none;
		border: 0;
		color: rgb(255, 255, 255, 0.4);
		transition: all 0.1s ease-in-out;

		span {
			display: flex;
			filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 1));
		}

		&:hover, 
		input:focus-visible + span,
		input:checked + span {
			color: #8d1144;
		}

		&:active {
			transform: scale(0.9) !important;
		}

		input:focus-visible + span {
			outline: 2px solid var(--accent);
		}
	}

	// .card:focus-within,
	.card:hover, 
	.card a:focus-visible {
		.card-bg {
			filter: brightness(0.15);
		}
		.card-caption {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
