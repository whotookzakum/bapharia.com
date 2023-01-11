<script>
	export let title;
	export let href;
	export let category;
	export let caption;
	export let bgSrc;
</script>

<a class="card box" {href}>
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

<style lang="scss">
	a.card {
		display: block;
		border: none;
		position: relative;
		min-height: 200px;
		padding: var(--space-xs);
		z-index: 0;
		color: var(--text1);
		line-height: 1.4;
	}
	h3.card-title {
		font-size: var(--step-1);
		margin: 0;
		font-weight: 500;
		letter-spacing: unset;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
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
	.card:hover {
		.card-bg {
			filter: brightness(0.15);
		}
		.card-caption {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
