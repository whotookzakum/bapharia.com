<script>
	import { browser } from "$app/environment";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";

	let theme = browser && localStorage.getItem("theme-preference");
	let showing = false;
	let previousTheme, previousSystemTheme;
	let systemTheme;
		
	if (browser && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		systemTheme = "dark"
	}
	else {
		systemTheme = "light"
	}

	let changeDirection;

	onMount(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				previousSystemTheme = systemTheme;
				systemTheme = event.matches ? "dark" : "light";
				if (theme === "system") 
				updateChangeDirection(previousSystemTheme, systemTheme)
			});
	});

	function updateTheme(e) {
		previousTheme = theme;
		theme = e.target.value;
		updateChangeDirection(previousTheme === "system" ? systemTheme : previousTheme, theme === "system" ? systemTheme : theme)
		applyTheme(theme);
		showing = false;
	}

	function updateChangeDirection(before, after) {
		changeDirection = `${before}-to-${after}`
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

<span>
	<!-- {previousTheme}
	{systemTheme}
	{theme} -->
	{changeDirection}
</span>
<div class="wrapper">
	<button
		class="btn-theme-toggle"
		aria-label="Open theme selector"
		aria-live="polite"
		on:click={() => (showing = !showing)}
	>
		{#if changeDirection === "dark-to-light"}
			<Icon icon="line-md:moon-to-sunny-outline-transition" />
		{:else if changeDirection === "light-to-dark"}
			<Icon icon="line-md:sunny-outline-to-moon-transition" />
		{:else if (theme === "system" ? systemTheme === "dark" : theme === "dark") && (previousSystemTheme !== "light" || previousTheme !== "light")}
			<Icon icon="line-md:moon" />
		{:else if (theme === "system" ? systemTheme === "light" : theme === "light") && (previousSystemTheme !== "dark" || previousTheme !== "dark")}
			<Icon icon="line-md:sunny-outline" />
		{/if}
	</button>

	{#if showing}
		<div class="modal box grid g-50">
			<label class="mini-header">
				<input
					type="radio"
					class="visually-hidden"
					value="light"
					bind:group={theme}
					on:input={(e) => updateTheme(e)}
				/>
				<span>
					Light
					<Icon icon="mingcute:sun-line" width="20" />
				</span>
			</label>
			<label class="mini-header">
				<input
					type="radio"
					class="visually-hidden"
					value="dark"
					bind:group={theme}
					on:input={(e) => updateTheme(e)}
				/>
				<span>
					Dark
					<Icon icon="mingcute:moon-stars-line" width="20" />
				</span>
			</label>
			<label class="mini-header">
				<input
					type="radio"
					class="visually-hidden"
					value="system"
					bind:group={theme}
					on:input={(e) => updateTheme(e)}
				/>
				<span>
					System
					<Icon icon="mingcute:computer-line" width="20" />
				</span>
			</label>
		</div>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.btn-theme-toggle {
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		pointer-events: auto;
		background: none;
		border: none;
		border-radius: 50%;
		color: var(--text2);
		transition: all 0.15s ease;
		font-size: var(--step-4);

		&:hover,
		&:focus-visible {
			color: var(--text1);
			background-color: var(--surface1);
		}

		&:active {
			translate: 0 2px;
			color: var(--text2);
		}
	}

	.modal {
		position: absolute;
		right: 0;
		// bottom: 0.5rem;
		top: calc(0.5rem + 44px);
		border-radius: 0.5rem;
	}

	label {
		text-transform: unset;
	}

	span {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		flex-direction: row-reverse;
		justify-content: start;
	}

	input:focus-visible + span,
	span:hover {
		color: var(--text1);
	}

	input:checked + span {
		color: var(--accent1);
	}
</style>
