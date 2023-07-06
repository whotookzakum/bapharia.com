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

<div class="navbar-wrapper">
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
			class="link logo-wrapper styled-link"
			class:active={$page.url.pathname === "/"}
			style:padding="0.5rem"
			
		>
			<!-- <span class="logo icon" /> -->
			<img
				class="logo grid"
				src="/images/logo.png"
				alt="Home"
				width="38"
				height="38"
				style:place-items="center"
			/>
		</a>
		<input type="search" placeholder="Search" name="" id=""/>
		{#each links as link}
			<a
				href={link.href}
				class="link styled-link hover-link"
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
		width: 100%;
		z-index: 1002;
		background: rgb(35 39 47/0.9);
		backdrop-filter: blur(50px);
		top: 0;
		padding: 0 1rem;
	}

	.navbar {
		--icon-size: 38px;
		max-width: 1400px;
		width: 100%;
		margin: auto;
		align-items: center;
		height: 62px;
	}

	.show-when-focus-visible:not(:focus-visible) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	input {
		border: none;
		background: rgba(120,131,155,.2);
		padding: 0.5rem 1rem;
		border-radius: 3rem;
		flex: 1;
		max-width: 300px;

		&::placeholder {
			color: inherit;
		}
	}

	// HEADER ======================================================

	// LINKS =====================================================

	.link {
		border: none;
		padding: 0.75rem;
		border-radius: 3rem;
		// background: green;
	}

	.hover-link {
		&:hover {
			background: rgba(246,247,249,.05);
		}
	}

	.icon {
		content: "";
		display: inline-block;
		height: var(--icon-size);
		width: var(--icon-size);
		mask: no-repeat center / contain;
		-webkit-mask: no-repeat center / contain;
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

	// FOOTER ====================================================

	// MOBILE ======================================

	.mobile-drawer-label {
		margin-right: 1rem;
	}

	@media (max-width: 850px) {
		.navbar-wrapper {
			width: 100%;
			height: unset !important;
			position: fixed;
		}

		.navbar {
			display: grid !important;
			--nav-width: 100% !important;
		}

		// .collapsed .show-when-expanded {
		// 	all: unset !important;
		// }

		.navbar:not(.mobile-expanded) {
			.nav-body,
			.nav-footer {
				display: none !important;
			}
		}

		.link-home {
			.hidden-text {
				display: none;
			}

			&:hover::after {
				background: none;
			}
		}
	}

	@media (min-width: 850px) {
		.mobile-controls {
			display: none;
		}

		.link-home {
			width: 100%;

			* {
				transition: all 0.2s ease;
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
	}
</style>
