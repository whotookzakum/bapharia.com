<script>
	import SectionHeader from "./SectionHeader.svelte";

	const interactivePages = [
		{
			title: "Map",
			href: "/map",
			iconSrc: "msq.svg",
		},
		{
			title: "Skills",
			href: "/skills",
			iconSrc: "imajinn.svg",
		},
		{
			title: "Crafting",
			href: "/crafting",
			iconSrc: "crafting.svg",
		},
		{
			title: "Menu",
			href: "/menu",
			iconSrc: "liquidmemory.svg",
		}
	];
</script>

<section>
	<menu class="card-grid">
		{#each interactivePages as page}
			<li>
				<a class="box" href={page.href}>
					<img src={`/images/${page.iconSrc}`} alt="Icon" />
					<h3>{page.title}</h3>
				</a>
			</li>
		{/each}
	</menu>
</section>

<style lang="scss">

	

	h1 {
		margin: auto;
		letter-spacing: normal;
		width: fit-content;
		font-size: var(--step-4);
	}

	menu {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: var(--space-s);
	}

	@media (max-width: 800px) {
		menu {
			grid-template-columns: 1fr 1fr;
		}
	}

	li {
		transition: all 0.1s ease;
		font-weight: bolder;

		&:hover {
			filter: brightness(1.1);
			transform: translateY(-4px); // or scale(1.05)
			box-shadow: 0 8px 14px var(--surface-shadow);
		}

		a {
			display: grid;
			place-items: center;
			gap: var(--space-2xs);
			padding: var(--space-s);
			width: 100%;
			height: 100%;
			border: none;
		}

		img {
			min-width: 48px;
			aspect-ratio: 1/1;
			opacity: 0.6;
		}

		h3 {
			font-size: var(--step-1);
			color: var(--text2);
			line-height: 1.2;
			margin: 0;
		}
	}

	li:nth-child(1) {
		background: var(--surface1) !important;
	}

	li:nth-child(2) {
		background: var(--surface2) !important;
	}

	li:nth-child(3) {
		background: var(--surface3) !important;
	}

	li:nth-child(4) {
		background: var(--surface1) !important;
	}
</style>
