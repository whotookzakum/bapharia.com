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
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<nav class="navbar flex" class:expanded={isExpanded}>
	<a href="#main" class="visually-hidden show-when-focus-visible"
		>Skip to main content</a
	>
	<a href="/">
		<img class="logo" src="/images/logo.png" alt="Logo" />
		<span class="visually-hidden show-when-expanded">Bapharia</span>
	</a>
	<div class="nav-body">
		<hr />
		<TimeInJapan {isExpanded} />
		<hr />
		<div class="links">
			{#each links as link}
				<a
					href={link.href}
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
	<label class="flex">
		<Icon
			icon={isExpanded ? "ri:expand-left-line" : "ri:expand-right-line"}
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
</nav>

<style lang="scss">
	.navbar {
		position: sticky;
		height: 100vh;
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

	img.logo {
		max-width: var(--icon-size);
		filter: brightness(0.95) drop-shadow(0 2px 1px var(--surface-shadow));
		transition: all 0.2s ease;

		&:hover {
			transform: translateY(-4px);
			filter: brightness(0.95)
				drop-shadow(0 6px 1px var(--surface-shadow));
		}
	}

	a.active,
	a:focus-visible,
	a:hover,
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

	a,
	summary {
		border: none;
		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		padding: 0.5rem 1rem;
	}

	a:not(.active) {
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

	label {
		width: 38px;
		aspect-ratio: 1/1;
		margin: auto 1rem 0.5rem auto;

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
