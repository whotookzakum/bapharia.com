<script>
	import { userLocale } from "$lib/stores";
	import Icon from "@iconify/svelte";
	import links from "./navigation/links.json";
	import { page } from "$app/stores";
</script>

<footer class="page-footer grid g-25" class:top-margin={$page.url.pathname !== "/"}>
	<nav class="footer-contents grid">
		<div class="left-col grid g-50">
			<a href="/" class="home-link flex g-50 styled-link">
				<img src="/images/logo.png" alt="" width="38" height="38" />
				<span>Bapharia</span>
			</a>
			<div class="grid g-50" style="margin-left: calc(38px + 0.5rem);">
				<a class="styled-link" href="/about">About</a>
				<a class="styled-link" href="/changelog">Changelog</a>
				<a class="styled-link" href="/privacy">Privacy</a>
			</div>
		</div>
		<div class="grid g-50">
			<p class="col-header">Links</p>
			{#each links as link}
				<a class="styled-link" href={link.href}
					>{link.name[$userLocale]}</a
				>
			{/each}
		</div>
		<div>
			<p class="col-header">Support</p>
			<div>
				<p style="font-size: var(--step--1); margin-block: 0.25rem 0;">
					If Bapharia has been helpful to you, consider showing
					support and joining our community!
				</p>
				<div class="socials flex" style="gap: 0.75rem">
					<a href="/discord">
						<Icon
							icon="logos:discord-icon"
							rel="noopener nofollow noreferrer"
							target="_blank"
							width="32"
							height="32"
						/>
						<span class="visually-hidden">Join us on Discord!</span>
					</a>
					<a
						href="https://youtube.com/zakum"
						rel="noopener nofollow noreferrer"
						target="_blank"
					>
						<Icon
							icon="logos:youtube-icon"
							width="32"
							height="32"
						/>
						<span class="visually-hidden"
							>Check out my YouTube!</span
						>
					</a>
					<a
						href="https://ko-fi.com/whotookzakum"
						rel="noopener nofollow noreferrer"
						target="_blank"
						class="kofi"
					>
						<Icon
							icon="simple-icons:ko-fi"
							width="36"
							height="36"
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
						<Icon icon="logos:paypal" width="28" height="28" />
						<span class="visually-hidden"
							>Support Bapharia on PayPal!</span
						>
					</a>
					<a
						href="https://www.patreon.com/zakum"
						rel="noopener nofollow noreferrer"
						target="_blank"
					>
						<Icon icon="logos:patreon" width="28" height="28" />
						<span class="visually-hidden"
							>Support Bapharia on Patreon!</span
						>
					</a>
				</div>
			</div>
		</div>
		<span style="font-size: var(--step--1);">
			&copy; 2021-2023 Bapharia.com
		</span>
	</nav>
</footer>

<style lang="scss">
	.page-footer {
		border-top: 1px solid var(--surface2);
		background: var(--surface1);
	}

	.top-margin {
		margin-top: var(--space-2xl);
	}

	.footer-contents {
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 2rem;
		width: 100%;
		max-width: 1220px;
		margin: auto;
		font-size: var(--step--1);
		color: var(--text2);
		padding: var(--space-m) 1rem;
		align-items: start;
	}

	a {
		width: fit-content;
	}

	.home-link {
		font-size: var(--step-1);
		font-weight: 700;
		color: var(--text1);
		align-items: center;
	}

	.col-header {
		margin: 0;
		font-weight: 800;
		font-size: var(--step-2);
		color: var(--text1);
	}

	.socials {
		margin-block: 0.5rem;
		align-items: center;
	}

	.left-col {
		align-items: start;
	}
</style>
