<script>
	import LocaleSelector from "./LocaleSelector.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import TimeInJapan from "./TimeInJapan.svelte";
	import links from "./links.json";
	import randomMessages from "./randomMessages.json";
	import { userLocale } from "$lib/stores";

	let isExpanded = true;
	let isMobileExpanded = false;

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

<div class="navbar-wrapper layout">
	<a
		href="#main"
		class="link show-when-focus-visible"
		style:font-size="var(--step--1)"
	>
		Skip to main content and focus
	</a>
	<nav class="navbar flex g-50" class:mobile-expanded={isMobileExpanded}>
		<!-- <div class="nav-header">
			<div class="mobile-controls flex g-25">
				<LocaleSelector isCollapsed={true} />
				<label class="mobile-drawer-label" for="drawerToggle">
					<input
						type="checkbox"
						bind:checked={isMobileExpanded}
						id="drawerToggle"
						class="visually-hidden"
					/>
					<Icon
						icon={isMobileExpanded ? "ph:x-bold" : "entypo:menu"}
						width="32"
						height="32"
					/>
				</label>
			</div>
		</div> -->
		<a
			href="/"
			class="link styled-link"
			class:active={$page.url.pathname === "/"}
			style:padding="0.5rem"
		>
			<img
				class="transition-pushable flex"
				src="/images/logo.png"
				alt="Home"
				width="38"
				height="38"
			/>
		</a>
		<input type="search" placeholder="Search" name="" id="" />
		{#each links as link}
			<a
				href={link.href}
				class="link styled-link hover-link rounded"
				class:active={$page.url.pathname.includes(link.href)}
			>
				{link.name[$userLocale]}
			</a>
		{/each}

		<div class="extras">
			<LocaleSelector isCollapsed={!isExpanded} />
			<ThemeToggle />
		</div>

		<!-- <TimeInJapan isExpanded={false} /> -->
	</nav>
</div>

<style lang="scss">
	$bg: #1c1f2e;
	$surface1: #6315ac;
	$surface2: #ab1572;
	.navbar-wrapper {
		position: sticky;
		z-index: 1002;
		// background: rgb(35 39 47/0.9);
		backdrop-filter: blur(50px);
		top: 0;
	}

	.navbar {
		width: 100%;
		margin: auto;
		align-items: center;
		height: 62px;
	}

	input {
		border: none;
		background: rgba(120, 131, 155, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 3rem;
		flex: 1;
		max-width: 300px;

		&::placeholder {
			color: inherit;
		}
	}

	// LINKS =====================================================

	.link {
		border: none;
		padding: 0.75rem;
	}

	.hover-link:hover {
		background: rgba(246, 247, 249, 0.05);
	}

	.active {
		color: var(--accent) !important;
	}

	// EXTRAS ======================================================

	.extras {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		margin-left: auto;
	}
</style>
