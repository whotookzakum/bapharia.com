<script>
	import Icon from "@iconify/svelte";

	let getTheme = () => {
		return localStorage.getItem("theme-preference");
	};

	let setTheme = (theme) => {
		localStorage.setItem("theme-preference", theme);
		document.documentElement.setAttribute("color-scheme", theme);
	};

	let theme;

	// Manually set theme to dark or light
	let toggleTheme = () => {
		theme = getTheme();

		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
</script>

<svelte:head>
	<script>
		// Use cached theme
		theme = localStorage.getItem("theme-preference");

		// If theme is cached, apply theme
		if (theme) {
			document.documentElement.setAttribute("color-scheme", theme);
		}
		// If theme is null then fallback to system theme (in CSS) 
		// Add event listener to sync site theme with system theme
		else {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", ({ matches: isDark }) => {
					theme = localStorage.getItem("theme-preference");
					if (!theme) {
						if (isDark) {
							document.documentElement.setAttribute(
								"color-scheme",
								"system-dark"
							);
						} else {
							document.documentElement.setAttribute(
								"color-scheme",
								"system-light"
							);
						}
					}
				});
		}
	</script>
</svelte:head>

<button
	class="btn-theme-toggle"
	on:click={toggleTheme}
	aria-label="Toggle Light & Dark Theme"
	aria-live="polite"
>
	{#if theme === "dark"}
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
