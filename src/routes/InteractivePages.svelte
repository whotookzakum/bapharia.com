<script>
	import SectionHeader from "./SectionHeader.svelte";

	const interactivePages = [
		{
			title: 'Map',
			href: '/map',
			iconSrc: 'msq.svg'
		},
		{
			title: 'Skills',
			href: '/skills',
			iconSrc: 'imajinn.svg'
		},
		{
			title: 'Crafting',
			href: '/crafting',
			iconSrc: 'crafting.svg'
		},
		{
			title: 'Menu',
			href: '/menu',
			iconSrc: 'liquidmemory.svg'
		}
	];
</script>

<section>
	<SectionHeader text='Interactive Pages'/>
	<menu class="card-grid">
		{#each interactivePages as page}
			<li key={page.title}>
				<a href={page.href}>
					<img src={`/images/${page.iconSrc}`} alt="Icon" />
					<h3>{page.title}</h3>
				</a>
			</li>
		{/each}
	</menu>
</section>

<style lang="scss">
	section {
		max-width: 800px;
		margin: auto;
        min-height: 50vh;
	}

	menu {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		justify-content: center;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: var(--space-s);
	}

    @media (max-width: 800px) {
        menu {
            grid-template-columns: 1fr 1fr;
        }
    }

	li {
		background: var(--surface2);
		box-shadow: 0 4px 14px var(--surface-shadow);
		border-radius: 10px;
        transition: all 0.1s ease;

        &:hover {
            filter: brightness(1.1);
            // transform: scale(1.05);
            transform: translateY(-4px);
            box-shadow: 0 8px 14px var(--surface-shadow);
        }

		a {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
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
			margin-top: 1rem;
            // font-family: inherit;
			text-align: center;
		}
	}
</style>
