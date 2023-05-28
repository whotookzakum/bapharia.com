<script>
	import Icon from "@iconify/svelte";

	export let title;
	export let href;
	export let category;
	export let caption;
	export let bgSrc;

	let isFavorited = false;
</script>

<div class="card box">
	<a class="card-title skip-std" {href}>{title}</a>
	<div class="card-caption" aria-hidden="true">
		<span class="category">{category}</span>
		<p>{caption}</p>
	</div>
	<div class="card-caption visually-hidden">
		<span class="category">{category}</span>
		<p>{caption}</p>
	</div>
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
	<img class="bg-img" src={bgSrc} alt="" loading="lazy" width="640" height="360" />
</div>

<style lang="scss">
	.card {
		position: relative;
		padding: 0;
		min-height: 200px;
		padding: var(--space-xs);
		background: none;
		border: none;
		user-select: none;
	}

	a.card-title {
		display: block;
		border: none;
		color: var(--text1);
		line-height: 1.4;
		font-size: var(--step-2);
		margin: 0;
		font-weight: 500;
		letter-spacing: unset;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
		outline: none !important;

		&::after {
			content: "";
			position: absolute;
			inset: 0;
		}
	}

	img.bg-img {
		position: absolute;
		z-index: -1;
		inset: 0;
		transition: filter 0.1s ease-in-out;
		filter: brightness(0.5);
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.card-caption {
		opacity: 0;
		transform: translateY(20%);
		transition: all 0.1s ease-in-out;
		pointer-events: none;

		p {
			margin-bottom: 0;
			margin-top: var(--space-2xs);
			font-size: var(--step-0);
		}

		.category {
			font-weight: 600;
			color: var(--accent);
			font-size: var(--step-0);
		}

		&:not(.visually-hidden) {
			visibility: hidden;
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

	.card:has(:focus-visible) {
		outline: 2px solid var(--accent);
	}

	.card:where(:hover, :has(:focus-visible)) {
		img.bg-img {
			filter: brightness(0.15);
		}

		.card-caption {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
	}

	@supports not selector(:has(*)) {
		.card:focus-within {
			outline: 2px solid var(--accent);

			// to hide click use another element that will take the outline and use a:focus-within ~ and label:focus-within ~ to activate outline

			img.bg-img {
				filter: brightness(0.15);
			}

			.card-caption {
				opacity: 1;
				visibility: visible;
				transform: translateY(0);
			}
		}
	}
</style>
