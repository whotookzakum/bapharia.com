<script>
	import { browser } from "$app/environment";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";
	import NavButton from "./NavButton.svelte";
	import NavModal from "./NavModal.svelte";

	let theme = browser && localStorage.getItem("theme-preference");
	let showing = false;
	let systemTheme;
	let themeChanged = false;

	if (browser && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		systemTheme = "dark";
	} else {
		systemTheme = "light";
	}

	onMount(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				systemTheme = event.matches ? "dark" : "light";
				themeChanged = true;
			});
	});

	function updateTheme(e) {
		theme = e.target.value;
		applyTheme(theme);
		showing = false;
		themeChanged = true;
	}

	function applyTheme(theme) {
		if (!browser) return;
		if (theme && theme !== "system") {
			document.documentElement.setAttribute("color-scheme", theme);
		} else {
			document.documentElement.removeAttribute("color-scheme", theme);
		}
		localStorage.setItem("theme-preference", theme);
	}
</script>

<svelte:head>
	<script>
		cachedTheme = localStorage.getItem("theme-preference") ?? "system";
		applyTheme(cachedTheme);

		function applyTheme(theme) {
			if (theme && theme !== "system") {
				document.documentElement.setAttribute("color-scheme", theme);
			} else {
				document.documentElement.removeAttribute("color-scheme", theme);
			}
			localStorage.setItem("theme-preference", theme);
		}
	</script>
</svelte:head>

<div style="position: relative;">
	<NavButton bind:showing ariaLabel="Open theme selector" tooltip="Theme">
		{#if theme === "system" ? systemTheme === "dark" : theme === "dark"}
			<Icon
				icon={themeChanged
					? "line-md:sunny-outline-to-moon-transition"
					: "line-md:moon"}
				color={theme === "system" ? "inherit" : "var(--accent1)"}
			/>
		{:else}
			<Icon
				icon={themeChanged
					? "line-md:moon-to-sunny-outline-transition"
					: "line-md:sunny-outline"}
				color={theme === "system" ? "inherit" : "var(--accent1)"}
			/>
		{/if}
	</NavButton>

	{#if showing}
		<NavModal
			bind:group={theme}
			inputCallback={updateTheme}
			data={[
				{
					value: "light",
					title: "Light",
					icon: "mingcute:sun-line",
				},
				{
					value: "dark",
					title: "Dark",
					icon: "mingcute:moon-stars-line",
				},
				{
					value: "system",
					title: "System",
					icon: "mingcute:computer-line",
				},
			]}
		/>
	{/if}
</div>