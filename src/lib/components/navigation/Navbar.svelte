<script>
	import LocaleSelector from "./LocaleSelector.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";
	import { fetchMarkdownPosts } from "$lib/utils";
	import Icon from "@iconify/svelte";
	import TimeInJapan from "./TimeInJapan.svelte";

	let detailsOpen = false;
	let isExpanded = true;

	const links = [
		{
			name: "Database",
			imgSrc: "/images/psb.svg",
			href: "/db",
		},
		{
			name: "World Map",
			imgSrc: "/images/msq.svg",
			href: "/map",
		},
		{
			name: "Skills",
			imgSrc: "/images/imajinn.svg",
			href: "/skills",
		},
		{
			name: "Crafting",
			imgSrc: "/images/crafting.svg",
			href: "/crafting",
		},
		{
			name: "Menu",
			imgSrc: "/images/liquidmemory.svg",
			href: "/menu",
		},
	];

	let randomTextOptions = [
		"BLUE PROTOCOL Tools",
		"Do Not Porori!",
		"Bulge Slider when?",
		"Now with SEA servers!",
		"Dyeable underwear 🩲",
		"Eyebrow Angles 😏",
		"The Blue Dot 🔵",
		"Mirai Limited Edition 🎶",
		"Cryy come back 😢",
		"In 10",
		"Hand Holding! 🤝",
		"Mixed Yarn Class!",
		"Twin Striker Moon Jump",
		"Dancing in Asterleeds! 💃",
	];

	let randomText =
		randomTextOptions[Math.floor(Math.random() * randomTextOptions.length)];
	$: if ($page.url.pathname !== "/") {
		randomText =
			randomTextOptions[
				Math.floor(Math.random() * randomTextOptions.length)
			];
	}
	// TO DO: tiny says use aria-expanded instead of visually-hidden?
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<nav class="navbar flex" class:expanded={isExpanded}>
	<a href="#main" class="visually-hidden show-when-focus-visible"
		>Skip to main content</a
	>
	<a href="/" class="home-button flex link" style="align-items: center">
		<img class="logo" src="/images/logo.png" alt="Logo" />
		<span class="text-wrapper" role="text">
			<span class="visually-hidden show-when-expanded">Bapharia</span>
			<span
				class="hidden-text visually-hidden show-when-expanded"
				aria-hidden="true">{randomText}</span
			>
		</span>
	</a>
	<div class="nav-body">
		<hr />
		<TimeInJapan {isExpanded} />
		<hr />
		<div class="links">
			{#each links as link}
				<a
					href={link.href}
					class="link"
					class:active={$page.url.pathname === link.href}
				>
					<span
						class="icon"
						style={`mask: url(${link.imgSrc}) no-repeat center / contain;
						-webkit-mask: url(${link.imgSrc}) no-repeat center / contain;`}
					/>
					<span class="visually-hidden show-when-expanded"
						>{link.name}</span
					>
				</a>
			{/each}
		</div>
		<hr />
		<details bind:open={detailsOpen}>
			<summary>
				<span class="visually-hidden show-when-expanded">Guides</span>
				{#if isExpanded}
					<Icon
						icon={detailsOpen
							? "mdi:chevron-up"
							: "mdi:chevron-down"}
						width="20"
						height="20"
						style="margin-left: auto;"
					/>
				{/if}
			</summary>
			<div class="guides-list visually-hidden show-when-expanded">
				{#await fetchMarkdownPosts() then guides}
					{#each guides as guide}
						<a
							class="link"
							class:active={$page.url.pathname === guide.path}
							href={guide.path}>{guide.meta.title}</a
						>
					{/each}
				{/await}
			</div>
		</details>
		<hr />
		<div class="nav-extras flex g-50">
			<span
				class="visually-hidden show-when-expanded show-when-focus-within"
			>
				<LocaleSelector />
			</span>
			<ThemeToggle />
		</div>
	</div>
	<div class="nav-footer">
		<a
			class="site-version"
			href="/changelog"
			class:active={$page.url.pathname === "/changelog"}
			>{isExpanded ? "Version 0.9.2" : "v0.9.2"}</a
		>
		<label class="flex" aria-hidden="true">
			<Icon
				icon={isExpanded
					? "ri:expand-left-line"
					: "ri:expand-right-line"}
				width="38"
				height="38"
				style="margin-left: auto;"
			/>
			<span class="visually-hidden">Expand/Collapse Sidebar</span>
			<input
				class="visually-hidden"
				type="checkbox"
				bind:checked={isExpanded}
			/>
		</label>
	</div>
</nav>

<style lang="scss">
	.navbar {
		position: sticky;
		height: 100vh;
		z-index: 1000;
		background: var(--surface1);
		top: 0;
		flex-direction: column;
		padding: 0.5rem 0;
		width: var(--nav-width);
		overflow-y: auto;
		--icon-size: 38px;
	}

	:global(.navbar + .contents) {
		--nav-width: 70px;
	}

	.expanded,
	:global(.expanded + .contents) {
		--nav-width: 250px;
	}

	.show-when-focus-visible:not(:focus-visible) {
		height: 0;
		padding: 0;
	}

	.expanded .show-when-expanded,
	.show-when-focus-within:focus-within,
	.show-when-focus-visible:focus-visible {
		clip: unset;
		clip-path: unset;
		height: unset;
		overflow: unset;
		white-space: unset;
		width: unset;
	}

	.expanded .show-when-expanded,
	.show-when-focus-within:focus-within {
		position: unset;
	}

	a.home-button {
		gap: 0;

		* {
			transition: all 0.2s ease;
		}

		.text-wrapper {
			display: grid;
			grid-template-rows: auto 0fr;
		}

		.hidden-text {
			font-size: var(--step--2);
			color: var(--accent);
			overflow: hidden;
			opacity: 0;
			transition-delay: 0.05s;
		}

		img.logo {
			max-width: var(--icon-size);
			filter: brightness(0.95)
				drop-shadow(0 2px 1px var(--surface-shadow));
		}
	}

	a.home-button:hover {
		.text-wrapper {
			grid-template-rows: auto 1fr;
		}

		.hidden-text {
			opacity: 1;
		}

		img.logo {
			// transform: translateY(-4px);
			filter: brightness(0.95)
				drop-shadow(0 6px 1px var(--surface-shadow));
		}
	}

	.link.active,
	.link:focus-visible,
	.link:hover,
	summary:hover,
	summary:focus-visible {
		&::after {
			content: "";
			position: absolute;
			inset: 0;
			background: var(--surface2);
			z-index: -1;
		}
	}

	.link,
	.expanded .home-button,
	summary {
		border: none;
		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		padding: 0.5rem 1rem;
	}

	.link {
		&:hover,
		&:focus-visible {
			color: unset;
		}
	}

	details {
		font-size: var(--step-0);
	}

	.guides-list {
		max-height: 300px !important; // 300px ideal
		overflow-y: auto !important;
		// margin-top: 0;
	}

	.icon,
	summary::before {
		content: "";
		display: inline-block;
		height: var(--icon-size);
		width: var(--icon-size);
		background-color: var(--text1);
		mask: url("/images/guide.svg") no-repeat center / contain;
		-webkit-mask: url("/images/guide.svg") no-repeat center / contain;
	}

	.active {
		color: var(--accent) !important;

		.icon {
			background-color: var(--accent) !important;
		}
	}

	.nav-extras {
		align-items: center;
		padding: 0 12px;
		flex-wrap: wrap;
	}

	.navbar:not(.expanded) .nav-extras {
		margin: 0 auto;
	}

	.nav-footer {
		margin-top: auto;
		padding: 0rem 12px 4px 12px;
		width: 100%;
		justify-content: space-between;
		gap: 1rem;
		display: grid;
		justify-items: center;
	}

	.expanded .nav-footer {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.site-version {
		border: none;
		font-size: var(--step--2);
		color: var(--text2);
		text-decoration: underline;

		&:hover,
		&:focus-visible {
			color: var(--accent);
		}
	}

	.expanded .site-version {
		margin: 0 4px;
		padding: 0.6rem 0.2rem;
	}

	label {
		width: 44px;
		height: 44px;
		display: grid;
		place-content: center;

		&:hover {
			border-radius: 5px;
			background-color: var(--surface2);
		}

		&:has(:focus-visible) {
			border-radius: 5px;
			background-color: var(--surface2);
			outline: 2px solid var(--accent);
		}
	}

	@supports not selector(:has(*)) {
		label:focus-within {
			border-radius: 5px;
			background-color: var(--surface2);
			outline: 2px solid var(--accent);
		}
	}
</style>
