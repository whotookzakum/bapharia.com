<script>
	import { page } from '$app/stores';
	import LocaleSelector from './LocaleSelector.svelte';

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
			<LocaleSelector/>
		</div>
	</div>
</nav>

<style lang="scss">
	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1400px;
		margin: 0 auto;
	}

	.nav-links {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		align-items: center;
	}

	a {
		display: block;
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