<script>
	import { page } from '$app/stores';
	import LocaleSelector from './LocaleSelector.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	
	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'Guides', href: '/guides' },
		{ title: 'Map', href: '/map' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Crafting', href: '/crafting' },
		{ title: 'Translator', href: '/translator' },
		{ title: 'Database', href: '/db' }
	];
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<nav class="navbar">
	<div class="nav-content">
		<div class="nav-links">
			{#each links as item}
				<a class:active={$page.url.pathname === item.href} href={item.href}>
					{item.title}
				</a>
			{/each}
		</div>
		<div class="nav-extras">
			<ThemeToggle />
			<LocaleSelector />
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar {
		position: sticky;
		top: 0;
		z-index: 500;
		box-shadow: 0 0 4px var(--surface-shadow);
		background: var(--surface2);
		transition: var(--transition-bg), var(--transition-shadow);
	}

	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1400px;
		margin: 0 auto;
	}

	.nav-extras {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
	}

	.nav-links {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		padding: 1rem;
		border-top: 4px solid transparent;
		border-bottom: 4px solid transparent;

		&:hover {
			border-top-color: var(--accent);
		}

		&.active {
			color: var(--accent);
		}
	}
</style>
