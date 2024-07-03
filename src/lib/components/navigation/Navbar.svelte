<script>
	import LocaleSelector from "./LocaleSelector.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import TimeInJapan from "./TimeInJapan.svelte";
	import links from "./links.json";
	import randomMessages from "./randomMessages.json";
	import {
		SUPPORTED_LANGS,
		SUPPORTED_PUBLISHERS,
		userLocale,
	} from "$lib/stores";
    import Link from "../Link.svelte";
    import SiteVersionLink from "./SiteVersionLink.svelte";
    import LangLink from "./LangLink.svelte";
	// import { browser } from "$app/environment";

	// export let publisher;
	// export let lang;

	// $: if (browser) {
		

	// 	console.log(`/${publisher}/${lang}`)
	// 	// const p = `/${path}/${href}`.replace(/\/+/g, '/')
    // 	// return p?.slice(-1) === "/" ? p.slice(0, -1) : p
	// 	for (let a of document.querySelectorAll("a:not(.static-link)")) {
	// 		// a.href = linkPrefix + a.getAttribute("href")
	// 		let href = `/${publisher}/${lang}` + a.getAttribute("href")
	// 		SUPPORTED_PUBLISHERS.forEach(supported => {
	// 			href = href.replace(`/${supported}/`, `/${publisher}/`)
	// 		})
	// 		SUPPORTED_LANGS.forEach(supported => {
	// 			href = href.replace(`/${supported}/`, `/${lang}/`)
	// 		})
	// 		console.log(href)
	// 		a.href = href
	// 	}
	// }

	let isMobileExpanded = false;

	let randomMessage =
		randomMessages[Math.floor(Math.random() * randomMessages.length)];
	$: if ($page.url.pathname !== "/") {
		randomMessage =
			randomMessages[Math.floor(Math.random() * randomMessages.length)];
	}
	// TODO: tiny says use aria-expanded instead of visually-hidden?

	// db, map, builder, classes, story, guides, calendar
</script>

<!-- https://nicobachner.com/sveltekit-theme-switch -->
<!-- https://web.dev/building-a-color-scheme -->

<a
	href="#main"
	class="skip-and-focus px-2 py-1 m-2 flex w-fit"
	style:font-size="var(--step--1)"
>
	Skip to main content and focus
</a>
<nav class="navbar flex gap-2" class:opaque-bg={isMobileExpanded}>
	<a href="/" class="home-btn" on:click={() => (isMobileExpanded = false)}>
		<img
			class="transition-shrink flex"
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
	<div class="nav-contents gap-2" style="align-items: center; flex: 1;">
		<input type="search" placeholder="Search" name="" id="" />
		{#each links as link}
			<a
				href={link.href}
				class="styled-link hover-surface1 p-3 rounded-full"
				class:active={$page.url.pathname.includes(link.href)}
				on:click={() => (isMobileExpanded = false)}
			>
				{link.name[$userLocale]}
			</a>
		{/each}
		<div class="extras flex items-center">
			<button class="hover-surface1 p-4">
				{$page.data.publisher}
				{$page.data.lang}
				{$userLocale}
			</button>

			<div
				class="absolute grid gap-4 z-10 top-16 right-0 p-4 rounded-2xl surface2 w-64"
			>
				<label>
					<input
						type="radio"
						bind:group={$userLocale}
						value="en_US"
					/> en_US
				</label>
				<label>
					<input
						type="radio"
						bind:group={$userLocale}
						value="ja_JP"
					/> ja_JP
				</label>

				<div class="grid">
					<span class="mini-header">Version</span>
					<SiteVersionLink publisherLink href="/bno" class="styled-link static-link"
						>Bandai Namco Online</SiteVersionLink
					>
					<SiteVersionLink publisherLink href="/ags" class="styled-link static-link"
						>Amazon Games</SiteVersionLink
					>
				</div>
				<div class="grid">
					<span class="mini-header">Language</span>
					<LangLink href="/ja" class="styled-link static-link">日本語</LangLink>
					<LangLink href="/en" class="styled-link static-link">English</LangLink>
					<LangLink href="/fr" class="styled-link static-link">Français</LangLink>
					<LangLink href="/de" class="styled-link static-link">Deutsch</LangLink>
					<LangLink href="/es" class="styled-link static-link">Español</LangLink>
					<LangLink href="/pt" class="styled-link static-link">Português</LangLink>
				</div>
				<div class="grid">
					<span class="mini-header">Time Zone</span>
					<label>
						<input type="radio" name="" id="" /> Local Time
					</label>
					<label>
						<input type="radio" name="" id="" /> UTC
					</label>
					<label>
						<input type="radio" name="" id="" /> JST
					</label>
				</div>
			</div>

			<!-- <TimeInJapan />
			<LocaleSelector />
			<ThemeToggle /> -->
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
		background: var(--bg);
		// background: red;
		top: 0;
		padding: 0 1rem;
		height: var(--nav-height);
		z-index: 9000;
	}

	input {
		border: none;
		background: var(--surface2, rgba(120, 131, 155, 0.2));
		padding: 0.5rem 1rem;
		border-radius: 3rem;
		flex: 1;
		max-width: 300px;
		min-width: 0;
	}

	// LINKS =====================================================

	.home-btn {
		margin: auto;
		padding: 0.5rem;
	}

	// EXTRAS ======================================================

	.extras {
		margin-left: auto;
	}

	.nav-contents {
		display: flex;
	}

	#drawerToggle {
		display: none;
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
			align-items: center;

			&.opaque-bg {
				background: var(--surface1);
			}
		}

		.home-btn {
			flex: 1;
		}

		.nav-contents {
			background: inherit;
			display: none;
			position: fixed;
			top: var(--nav-height);
			left: 0;
			width: 100%;
			padding: 0 1rem 1rem 1rem;
			box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
			border-bottom: 1px solid var(--surface2);
			gap: 0.5rem;

			input {
				order: 2;
				max-width: none;
			}

			a {
				order: 3;
				padding-block: 0.5rem;
			}
		}

		.extras {
			margin: unset;
		}

		.drawer-label,
		#drawerToggle:checked ~ .nav-contents {
			display: grid;
		}
	}
</style>
