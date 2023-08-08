<script>
	import LocaleSelector from "./LocaleSelector.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import TimeInJapan from "./TimeInJapan.svelte";
	import links from "./links.json";
	import randomMessages from "./randomMessages.json";
	import { userLocale } from "$lib/stores";

	let isMobileExpanded = false;

	let randomMessage =
		randomMessages[Math.floor(Math.random() * randomMessages.length)];
	$: if ($page.url.pathname !== "/") {
		randomMessage =
			randomMessages[Math.floor(Math.random() * randomMessages.length)];
	}
	// TO DO: tiny says use aria-expanded instead of visually-hidden?

// 	[
//     {
//         "name": {
//             "ja_JP": "データベース",
//             "en_US": "Database"
//         },
//         "href": "/db"
//     },
//     {
//         "name": {
//             "ja_JP": "マップ",
//             "en_US": "Map"
//         },
//         "href": "/map"
//     },
//     {
//         "name": {
//             "ja_JP": "ビルダー",
//             "en_US": "Builder"
//         },
//         "href": "/builder"
//     },
//     {
//         "name": {
//             "ja_JP": "冒険ボード",
//             "en_US": "Boards"
//         },
//         "href": "/boards"
//     },
//     {
//         "name": {
//             "ja_JP": "クラス",
//             "en_US": "Classes"
//         },
//         "href": "/classes"
//     },
//     {
//         "name": {
//             "ja_JP": "ガイド",
//             "en_US": "Guides"
//         },
//         "href": "/guides"
//     },
//     {
//         "name": {
//             "ja_JP": "イベント",
//             "en_US": "Events"
//         },
//         "href": "/events"
//     }
// ]
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<a
	href="#main"
	class="link show-when-focus-visible"
	style:font-size="var(--step--1)"
>
	Skip to main content and focus
</a>
<nav class="navbar flex g-50" class:opaque-bg={isMobileExpanded}>
	<a
		href="/"
		class="home-btn link styled-link"
		on:click={() => isMobileExpanded = false}
	>
		<img
			class="transition-pushable flex"
			src="/images/logo.png"
			alt="Home"
			width="38"
			height="38"
		/>
	</a>
	<input
		type="checkbox"
		bind:checked={isMobileExpanded}
		id="drawerToggle"
		class="visually-hidden"
	/>
	<label class="drawer-label" for="drawerToggle">
		<Icon
			icon={isMobileExpanded ? "ph:x-bold" : "entypo:menu"}
			width="32"
			height="32"
		/>
		<span class="visually-hidden">Show/Hide Navigation</span>
	</label>
	<div class="nav-contents g-50" style="align-items: center; flex: 1;">
		<input type="search" placeholder="Search" name="" id="" />
		{#each links as link}
			<a
				href={link.href}
				class="link styled-link hover-link rounded"
				class:active={$page.url.pathname.includes(link.href)}
				on:click={() => isMobileExpanded = false}
			>
				{link.name[$userLocale]}
			</a>
		{/each}
		<div class="extras">
			<TimeInJapan />
			<LocaleSelector />
			<ThemeToggle />
		</div>
	</div>
</nav>

<style lang="scss">
	$bg: #1c1f2e;
	$surface1: #6315ac;
	$surface2: #ab1572;

	.navbar {
		position: sticky;
		width: 100%;
		z-index: 1002;
		// background: rgb(35 39 47/0.9);
		backdrop-filter: blur(50px);
		top: 0;
		padding: 0 1rem;
		height: 62px;
		z-index: 9000;
	}

	input {
		border: none;
		background: rgba(120, 131, 155, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 3rem;
		flex: 1;
		max-width: 300px;
		min-width: 0;

		&::placeholder {
			color: inherit;
		}
	}

	.opaque-bg {
		background: var(--surface1);
	}

	// LINKS =====================================================

	.link {
		border: none;
		padding: 0.75rem;
	}

	.home-btn {
		margin: auto auto auto 0;
		padding: 0.5rem;
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

	.nav-contents {
		display: flex;
	}

	#drawerToggle:focus-visible + .drawer-label,
	.drawer-label:hover { 
		background: var(--surface1);
	}

	.drawer-label {
		display: none;
		border-radius: 5px;
		width: 44px;
		height: 44px;
		place-items: center;
	}

	@media (max-width: 1150px) {
		.navbar {
			position: fixed;
			align-items: center;
			backdrop-filter: unset;
			pointer-events: none;

			* {
				pointer-events: initial;
			}
		}

		.home-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.75rem;
			padding: 0;

			&::after {
				content: "Bapharia";
				font-weight: 600;
				font-size: var(--step-1);
			}
		}

		.nav-contents {
			background: inherit;
			backdrop-filter: inherit;
			display: none;
			position: fixed;
			top: 62px;
			left: 0;
			width: 100%;
			padding: 0 1rem 1rem 1rem;
			box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
			border-bottom: 1px solid var(--surface2);

			input {
				order: 2;
				max-width: none;
			}

			a {
				order: 3;
			}
		}

		.extras {
			margin: unset;
			justify-content: space-between;
		}

		.drawer-label,
		#drawerToggle:checked ~ .nav-contents {
			display: grid;
		}
	}
</style>
