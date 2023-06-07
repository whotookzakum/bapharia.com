<script>
	import LocaleSelector from "./LocaleSelector.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";
	import { fetchMarkdownPosts } from "$lib/utils";
	import Icon from "@iconify/svelte";
	import TimeInJapan from "./TimeInJapan.svelte";
	import links from "./links.json";
	import randomMessages from "./randomMessages.json";

	let detailsOpen = false;
	let isExpanded = true;

	let randomMessage =
		randomMessages[Math.floor(Math.random() * randomMessages.length)];
	$: if ($page.url.pathname !== "/") {
		randomMessage =
			randomMessages[Math.floor(Math.random() * randomMessages.length)];
	}
	// TO DO: tiny says use aria-expanded instead of visually-hidden?
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->
<div class="navbar-wrapper flex">
	<a href="#main" class="link show-when-focus-visible" style:font-size="var(--step--1)">
		Skip to main content and focus
	</a>
	<nav class="navbar flex" class:expanded={isExpanded} class:collapsed={!isExpanded}>
		<div class="nav-header">
			<!-- <input type="checkbox" bind:checked={isExpanded} name="" id="" /> -->
		</div>
		<a href="/" class="link link-home link-with-icon">
			<img class="logo" src="/images/logo.png" alt="Logo" />
			<span class="link-text show-when-expanded" role="text">
				<span>Bapharia</span>
				<span class="hidden-text" aria-hidden="true"
					>{randomMessage}</span
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
						class="link link-with-icon"
						class:active={$page.url.pathname === link.href}
					>
						<span
							class="icon"
							style:mask-image="url({link.imgSrc})"
							style="-webkit-mask-image: url({link.imgSrc})"
						/>
						<span class="show-when-expanded">{link.name}</span>
					</a>
				{/each}
			</div>
			<hr />
			<details bind:open={detailsOpen}>
				<summary
					class="link link-with-icon"
					style="grid-template-columns: auto 1fr auto"
				>
					<span
						class="icon"
						style:mask-image="url('/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Library.png')"
						style="-webkit-mask-image: url('/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Library.png')"
					/>
					<span class="show-when-expanded">Guides</span>
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
				<div class="guides-list show-when-expanded">
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
			<div class="nav-extras">
				<LocaleSelector isCollapsed={!isExpanded} />
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
			<label class="nav-expander flex" aria-hidden="true">
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
</div>

<style lang="scss">
	.navbar-wrapper {
		position: sticky;
		height: 100vh;
		z-index: 1000;
		background: var(--surface1);
		top: 0;
		padding: 0.5rem 0;
		overflow-y: auto;
		flex-direction: column;
	}

	.navbar {
		height: 100%;
		flex-direction: column;
		width: var(--nav-width);
		--icon-size: 38px;
	}

	:global(.navbar + .contents) {
		--nav-width: 70px;
	}

	.expanded,
	:global(.expanded + .contents) {
		--nav-width: 250px;
	}

	.collapsed .show-when-expanded,
	.show-when-focus-visible:not(:focus-visible) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	// LINKS =====================================================

	.collapsed .link {
		gap: 0;
	}

	.link {
		align-items: center;
		border: none;
		position: relative;
		padding: 0.5rem 1rem;
		max-inline-size: none;
		display: block;
		gap: 1rem;

		&:hover,
		&:focus-visible {
			color: unset;
		}

		&.active,
		&:focus-visible,
		&:hover {
			&::after {
				content: "";
				position: absolute;
				inset: 0;
				background: var(--surface2);
				z-index: -1;
			}
		}
	}

	.link-with-icon {
		display: grid;
		grid-template-columns: auto 1fr;
	}

	.link-home {
		* {
			transition: all 0.2s ease;
		}

		.link-text {
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

		&:hover {
			.link-text {
				grid-template-rows: auto 1fr;
			}

			.hidden-text {
				opacity: 1;
			}
		}
	}

	.icon {
		content: "";
		display: inline-block;
		height: var(--icon-size);
		width: var(--icon-size);
		background-color: var(--text1);
		mask: no-repeat center / contain;
		-webkit-mask: no-repeat center / contain;
	}

	.active {
		color: var(--accent) !important;

		.icon {
			background-color: var(--accent) !important;
		}
	}

	// GUIDES ===================================================== 

	details {
		font-size: inherit;
	}

	.guides-list {
		max-height: 300px !important; // 300px ideal
		overflow-y: auto !important;
		// margin-top: 0;
	}

	// EXTRAS ======================================================

	.nav-extras {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		padding: 0 12px;
		flex-wrap: wrap;
	}

	.collapsed .nav-extras {
		display: grid;
		justify-content: center;
		gap: 0.25rem;
	}

	// FOOTER ====================================================
	
	.nav-footer {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		margin-top: auto;
		padding: 0rem 12px 4px 12px;
		width: 100%;
	}

	.collapsed .nav-footer {
		display: grid;
		justify-items: center;
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
