<script>
	import { userLocale } from "$lib/stores";
	import Icon from "@iconify/svelte";
	import links from "./links.json";
	import tools from "./tools.json";
	import { page } from "$app/stores";
</script>

<footer class="page-footer" class:top-margin={$page.url.pathname !== "/"}>
	<div class="footer-contents grid">
		<div class="grid gap-2" style="place-self: start;">
			<a href="/">
				<img src="/images/logo.png" alt="" width="48" height="48" />
				<span class="visually-hidden">Home</span>
			</a>
			<span style="color: var(--text2)"
				>Designed and developed by Zakum</span
			>
			<div class="socials flex">
				<a href="/discord">
					<Icon
						icon="logos:discord-icon"
						rel="noopener nofollow noreferrer"
						target="_blank"
						width="24"
						height="24"
					/>
					<span class="visually-hidden">Join us on Discord!</span>
				</a>
				<a
					href="https://youtube.com/zakum"
					rel="noopener nofollow noreferrer"
					target="_blank"
				>
					<Icon icon="logos:youtube-icon" width="24" height="24" />
					<span class="visually-hidden">Check out my YouTube!</span>
				</a>
				<a
					href="https://ko-fi.com/whotookzakum"
					rel="noopener nofollow noreferrer"
					target="_blank"
					class="kofi"
				>
					<Icon
						icon="simple-icons:kofi"
						width="28"
						height="28"
						color="white"
					/>
					<span class="visually-hidden"
						>Support Bapharia on Ko-Fi!</span
					>
				</a>
				<a
					href="https://paypal.me/bapharia"
					rel="noopener nofollow noreferrer"
					target="_blank"
				>
					<Icon icon="logos:paypal" width="20" height="20" />
					<span class="visually-hidden"
						>Support Bapharia on PayPal!</span
					>
				</a>
				<a
					href="https://www.patreon.com/zakum"
					rel="noopener nofollow noreferrer"
					target="_blank"
				>
					<Icon icon="logos:patreon" width="20" height="20" />
					<span class="visually-hidden"
						>Support Bapharia on Patreon!</span
					>
				</a>
			</div>
		</div>
		<nav class="flex">
			<div class="grid gap-2">
				<span class="col-header">Links</span>
				<ul class="unstyled-list gap-2">
					{#each links.filter((_, i) => i < 4) as link}
						<li>
							<a class="styled-link" href={link.href}
								>{link.name[$userLocale]}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="grid gap-2">
				<span class="col-header" style="opacity: 0">Links</span>
				<ul class="unstyled-list gap-2">
					{#each links.filter((_, i) => i >= 4 && i < 8) as link}
						<li>
							<a class="styled-link" href={link.href}
								>{link.name[$userLocale]}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="grid gap-2">
				<span class="col-header">Tools</span>
				{#each tools as tool}
					<a class="styled-link" href={tool.href}
						>{tool.name[$userLocale]}</a
					>
				{/each}
			</div>
			<div class="grid gap-2">
				<span class="col-header">Other</span>
				<ul class="unstyled-list gap-2">
					<li>
						<a class="styled-link" href="/about"> About </a>
					</li>
					<li>
						<a class="styled-link" href="/changelog"> Changelog </a>
					</li>
					<li>
						<a class="styled-link" href="/privacy"> Privacy </a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="footer-bottom flex">
		<span>&copy; 2021-2024 Bapharia.com</span>
		<hr />
		<span
			>BLUE PROTOCOL is a trademark of Bandai Namco Online Inc. & Bandai
			Namco Studios Inc.</span
		>
	</div>
</footer>

<style lang="scss">
	.page-footer {
		// border-top: 1px solid var(--surface2);
		max-width: calc(1450px + 5rem);
		padding: 2.5rem;
		margin: auto;
	}

	.footer-contents {
		gap: 3rem;
		grid-template-columns: 1fr 2fr;

		nav {
			gap: 3rem;
			align-items: start;

			& > * {
				flex: 1;
			}
		}
	}

	a {
		width: fit-content;
		color: var(--text2);
	}

	.col-header {
		color: var(--text1);
		font-weight: 800;
		display: none;
	}

	.socials {
		gap: 0.75rem;
		flex-wrap: wrap;

		a:where(:hover, :focus-visible) {
			filter: brightness(0.8);
		}
	}

	.footer-bottom {
		font-size: var(--step--1);
		flex-basis: 100% !important;
		gap: 0.5rem 1rem;
		flex-wrap: wrap;
		align-items: center;
		color: var(--text3);
		margin-top: 3rem;

		hr {
			width: 1px;
			height: 1rem;
			margin: 0;
		}
	}

	// .kofi {
	// 	position: relative;

	// 	&::before {
	// 		content: "";
	// 		z-index: 1;
	// 		top: 6px;
	// 		left: 3px;
	// 		width: 16px;
	// 		height: 16px;
	// 		position: absolute;
	// 		background: #ff5e5b;
	// 	}
	// }

	// .kofi svg {
	// 	position: relative;
	// 	z-index: 2;
	// }
</style>
