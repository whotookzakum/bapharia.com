<script>
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
		},
	];
</script>

<nav>
	{#each interactivePages as page}
		<a class="box" href={page.href}>
			<img
				src={`/images/${page.iconSrc}`}
				alt="Icon"
				width="48"
				height="48"
			/>
			<h3>{page.title}</h3>
		</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: var(--space-s);
	}

	a {
		display: grid;
		place-items: center;
		gap: var(--space-2xs);
		padding: var(--space-s);
		transition: background-color 0.1s ease, transform 0.1s ease,
			color 0.1s ease;
		color: var(--text2);

		img {
			opacity: 0.6;
			transition: opacity 0.1s ease;
		}

		h3 {
			font-size: var(--step-1);
			line-height: 1.2;
			margin: 0;
		}
	}

	a:hover {
		color: var(--text1);
		background: var(--surface2);
		transform: translateY(-4px); // or scale(1.05)
		box-shadow: 0 6px 4px var(--surface-shadow);

		img {
			opacity: 0.7;
		}
	}
</style>
