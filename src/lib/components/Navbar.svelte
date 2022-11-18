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
		{ title: 'Database', href: '/db' }
	];
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<nav class="navbar">
	<div class="nav-content">
		<img class="logo" src="/images/logo.png" alt="">
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
		transition: var(--transition-bg), var(--transition-shadow);
		padding: var(--space-m);
	}

	img.logo {
		max-width: 42px;
		filter: brightness(0.95);
	}

	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
	}

	.nav-extras {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
	}

</style>
