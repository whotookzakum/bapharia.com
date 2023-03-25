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
			disabled: true,
		},
		{
			title: "Crafting",
			href: "/crafting",
			iconSrc: "crafting.svg",
			disabled: true,
		},
		{
			title: "Menu",
			href: "/menu",
			iconSrc: "liquidmemory.svg",
			disabled: true,
		},
	];
</script>

<h2 id="interactive">Interactive</h2>
<nav>
	{#each interactivePages as page}
		{#if page.disabled}
			<button disabled class="link box">
				<div class="contents">
					<img
						src={`/images/${page.iconSrc}`}
						alt="Icon"
						width="48"
						height="48"
					/>
					<h3>{page.title}</h3>
				</div>
				<div class="soon">
					Coming<br />Soon
				</div>
			</button>
		{:else}
			<a class="link box" href={page.href}>
				<img
					src={`/images/${page.iconSrc}`}
					alt="Icon"
					width="48"
					height="48"
				/>
				<h3>{page.title}</h3>
			</a>
		{/if}
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

	.link {
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

	.link:not(:disabled):hover {
		color: var(--text1);
		background: var(--surface2);
		transform: translateY(-4px); // or scale(1.05)
		box-shadow: 0 6px 4px var(--surface-shadow);

		img {
			opacity: 0.7;
		}
	}

	button:disabled {
		background: rgb(22, 22, 22);
		border-color: rgb(31, 31, 31);
		position: relative;

		.contents {
			color: gray;
		}

		.soon {
			position: absolute;
			z-index: 3;
			bottom: 0;
			right: 0;
			margin: 0.8rem 0.4rem;
			transform: rotate(-40deg);
			color: var(--accent);
			font-weight: 500;
			line-height: 1;
		}

		&::before {
			content: "";
			position: absolute;
			z-index: 2;
			inset: 0;
			background: var(--surface2);
			border: 1px solid var(--surface3);
			transform: translate(50%, 50%) rotate(-40deg);
		}
	}
</style>
