<script>
	import LocaleSelector from "./LocaleSelector.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<nav class="navbar">
	<div class="nav-content">
		<a href="/">
			<img class="logo" src="/images/logo.png" alt="Logo" />
		</a>
		<div class="nav-extras">
			<ThemeToggle />
			<LocaleSelector />
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 500;
		transition: var(--transition-bg), var(--transition-shadow);
		padding: var(--space-xs); // 2xs to m
		// pointer-events: none; // if no background
		background: #0c0a18;
		border-bottom: 1px solid hsl(249, 41%, 12%);
		box-shadow: 0 2px 2px rgba(22, 18, 43, 0.3);
	}

	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1400px
	}

	a {
		border: none;
		pointer-events: auto;
	}

	img.logo {
		max-width: 42px;
		filter: brightness(0.95) drop-shadow(0 2px 1px var(--surface-shadow));
		transition: all 0.2s ease;

		&:hover {
			transform: translateY(-4px);
			filter: brightness(0.95)
				drop-shadow(0 6px 1px var(--surface-shadow));
		}
	}

	.nav-extras {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
	}
</style>
