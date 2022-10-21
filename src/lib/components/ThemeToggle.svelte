<script>
	import IconMoon from './icons/IconMoon.svelte';
	import IconSun from './icons/IconSun.svelte';

	const getTheme = () => {
		return localStorage.getItem('theme-preference');
	};

	const setTheme = (theme) => {
		localStorage.setItem('theme-preference', theme);
		document.documentElement.setAttribute('color-scheme', theme);
	};

	let theme;

	const toggleTheme = () => {
		theme = getTheme();

		if (theme === 'light') {
			console.log('manually set theme to dark');
			setTheme('dark');
		} else {
			console.log('manually set theme to light');
			setTheme('light');
		}
	};
</script>

<svelte:head>
	<script>
		const getTheme = () => {
			return localStorage.getItem('theme-preference');
		};

		const setTheme = (theme) => {
			localStorage.setItem('theme-preference', theme);
			document.documentElement.setAttribute('color-scheme', theme);
		};

		// Use cached theme; if null then default to system theme
		const theme = getTheme();

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
		<IconSun />
	{:else}
		<IconMoon />
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
