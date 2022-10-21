<script>
	import SunAndMoon from './SunAndMoon.svelte';

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
		<div class="light" />
	{:else}
		<div class="dark" />
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

	.light,
	.dark {
		background: var(--accent);
		width: 32px;
		aspect-ratio: 1/1;
        mask-size: 100%;

		&:hover {
			background: var(--text1);
		}
	}

	.light {
		mask-image: url('/images/elements/UI_IconAttribute_5.png');
	}

	.dark {
		mask-image: url('/images/elements/UI_IconAttribute_6.png');
	}
</style>
