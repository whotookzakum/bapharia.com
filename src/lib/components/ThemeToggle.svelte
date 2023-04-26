<script>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	let getTheme = () => {
		if (localStorage.getItem("theme-preference")) {
			return localStorage.getItem("theme-preference");
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "dark";
			}
			return "light";
		}
	};

	let cacheTheme = (t) => {
		theme = t;
		localStorage.setItem("theme-preference", t);
		document.documentElement.setAttribute("color-scheme", t);
	};

	let theme;

	onMount(() => {
		// If no cached theme, sync site theme to system theme
		// Button uses the variable 'theme' to determine icon
		// Colors are changed in CSS using using prefers-color-scheme attribute
		if (!localStorage.getItem("theme-preference")) {
			// console.log("No theme cached! Defaulting to system theme")
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", ({ matches: isDark }) => {
					if (isDark) {
						theme = "dark";
					} else {
						theme = "light";
					}
					// console.log("System theme changed to " + theme);
				});
		}
		// If cached theme exists, use it
		else {
			theme = getTheme();
			// console.log("Cached theme is " + theme)
		}
	});

	// Manually set theme to dark or light
	let toggleTheme = () => {
		if (theme === "light") {
			cacheTheme("dark");
		} else {
			cacheTheme("light");
		}
		// console.log("User changed theme to " + theme)
	};
</script>

<svelte:head>
	<script>
		// If cached theme exists, apply to document
		theme = localStorage.getItem("theme-preference");
		if (theme) {
			document.documentElement.setAttribute("color-scheme", theme);
		}
	</script>
</svelte:head>

<button
	class="btn-theme-toggle box hover"
	on:click={toggleTheme}
	aria-label="Toggle Light & Dark Theme"
	aria-live="polite"
>
	{#if browser}
		{#if theme === "light"}
			<img
				src="/UI/Guild/Parts/UI_GuildTimeIconBtn_Noon.png"
				alt=""
				width="32"
				height="32"
			/>
			<span class="visually-hidden">Light</span>
		{:else}
			<img
				src="/UI/MiniMap/UI_MiniMapTimeIcon2.png"
				alt=""
				width="44"
				height="44"
			/>
			<span class="visually-hidden">Dark</span>
		{/if}
	{/if}
</button>

<style lang="scss">
	.btn-theme-toggle {
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;

		img {
			filter: sepia(1) saturate(10)
				hue-rotate(calc(var(--h) * 1deg + 120deg));
		}
	}
</style>
