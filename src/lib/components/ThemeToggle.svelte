<script>
	import Icon from '@iconify/svelte';

	let getTheme = () => {
		return localStorage.getItem('theme-preference');
	};

	let setTheme = (theme) => {
		localStorage.setItem('theme-preference', theme);
		document.documentElement.setAttribute('color-scheme', theme);
	};

	let theme;

	// Manually set theme to dark or light
	let toggleTheme = () => {
		theme = getTheme();

		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
</script>

<svelte:head>
	<script>
		getTheme = () => {
			return localStorage.getItem('theme-preference');
		};

		setTheme = (theme) => {
			localStorage.setItem('theme-preference', theme);
			document.documentElement.setAttribute('color-scheme', theme);
		};

		// Use cached theme; if null then default to system theme
		theme = getTheme();

		if (theme) {
			setTheme(theme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}

		// Changing the system theme will update site theme
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches: isDark }) => {
				if (isDark) {
					setTheme('dark');
				} else {
					setTheme('light');
				}
			});
	</script>
</svelte:head>

<button
	class="btn-theme-toggle"
	on:click={toggleTheme}
	aria-label="Toggle Light & Dark Theme"
	aria-live="polite"
>
	{#if theme === 'dark'}
		<Icon icon="tabler:sun-high" width="24" height="24" />
	{:else}
		<Icon icon="tabler:moon" width="24" height="24" />
		<!-- material-symbols:night-sight-auto -->
	{/if}
</button>

<style lang="scss">
	.btn-theme-toggle {
		color: var(--accent);
		background: none;
		border: none;

		&:hover {
			color: var(--text1);
		}
	}
</style>
