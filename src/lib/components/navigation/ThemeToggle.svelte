<script>
	import { browser } from "$app/environment";
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";

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

<div class="wrapper">
	<button
		aria-label="Open theme selector"
		aria-live="polite"
		on:click={() => (showing = !showing)}
	>
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

	button {
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
		transition: translate 0.15s ease;
		font-size: var(--step-4);
		color: var(--text3);

		&:hover,
		&:focus-visible {
			color: var(--text2);
			background-color: var(--surface1);
		}

		&:active {
			translate: 0 1px;
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
		color: var(--text2);
	}

	input:checked + span {
		color: var(--accent1);
	}
</style>
