<script>
	import LocaleSelector from "./LocaleSelector.svelte";
</script>
<nav class="navbar">
	<div class="nav-links">
		<a href="/" class="active">Home</a>
		<a href="/guides">Guides</a>
		<a href="/map">Map</a>
		<a href="/skills">Skills</a>
		<a href="/crafting">Crafting</a>
		<a href="/translator">Translator</a>
		<a href="/db">Database</a>
	</div>
	<!-- <LocaleSelector value={$locale} on:locale-changed={(e) => setupI18n({ withLocale: e.detail })} /> -->
	<div class="nav-extras">
		<input type="text" placeholder="Search" />
	</div>
</nav>

<style lang="scss">
	@use '../styles/colors' as *;

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		top: 0;
		max-width: 1400px;
		margin: 0 auto;

		input {
			max-width: 21ch;
		}
	}

	.nav-links {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		align-items: center;

		a {
			display: block;
			padding: 1rem;
			border-top: 4px solid transparent;
			border-bottom: 4px solid transparent;
		}

		a:hover {
			border-top-color: $link;
		}

		a.active {
			color: $link;
		}
	}

	.nav-extras {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
