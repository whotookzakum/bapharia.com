<script>
	import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
	import links from "./navigation/links.json";
</script>

<footer class="page-footer grid g-25">
	<nav class="footer-contents grid">
		<div class="left-col grid g-5">
			<a href="/" class="home-link flex g-50 styled-link">
				<img src="/images/logo.png" alt="" width="38" height="38" />
				<span>Bapharia</span>
			</a>
			<div class="grid g-50" style="margin-left: 2.8rem;">
				<a class="styled-link" href="/about">About</a>
				<a class="styled-link" href="/changelog">Changelog</a>
				<a class="styled-link" href="/privacy">Privacy</a>
			</div>
			<!-- <div style="margin-top: auto;">
				
				
			</div> -->
			
		</div>
		<div class="middle-col">
			
			<div class="grid g-50">
				<p class="col-header">Links</p>
				
				{#each links as link}
					<a class="styled-link" href={link.href}
						>{link.name[$userLocale]}</a
					>
				{/each}
			</div>
		</div>
		<div class="right-col">
			<p class="col-header">Support</p>
			<div>
				<p style="font-size: var(--step--1); margin-top: 0;">If Bapharia has been helpful to you, consider showing support and joining our community!</p>
				<div class="socials flex" style="gap: 0.75rem">
					<a href="/discord" class="styled-link">
						<Icon icon="logos:discord-icon" width="32" height="32" />
						<span class="visually-hidden">Join us on Discord!</span>
					</a>
					<a href="https://youtube.com/zakum" class="styled-link">
						<Icon icon="logos:youtube-icon" width="32" height="32" />
						<span class="visually-hidden">Check out my YouTube!</span>
					</a>
					<a href="https://ko-fi.com/whotookzakum" class="styled-link">
						<Icon icon="simple-icons:ko-fi" width="36" height="36" />
						<span class="visually-hidden">Support Bapharia on Ko-Fi!</span>
					</a>
					<a href="https://youtube.com/zakum" class="styled-link">
						<Icon icon="logos:paypal" width="28" height="28" />
						<span class="visually-hidden">Support Bapharia on PayPal!</span>
					</a>
					<a href="https://www.patreon.com/zakum" class="styled-link">
						<Icon icon="logos:patreon" width="28" height="28" />
						<span class="visually-hidden">Support Bapharia on Patreon!</span>
					</a>
				</div>
			</div>
		</div>
		<span class="copyright" style="font-size: var(--step--2);">
			&copy; 2021-2023 Bapharia.com
		</span>
	</nav>
</footer>

<style lang="scss">
	.page-footer {
		// margin-top: var(--space-m);
		// text-align: center;
	}

	.footer-contents {
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 2rem;
		width: 100%;
		max-width: 1220px;
		margin: auto;
		padding: var(--space-m) 1rem;
		font-size: var(--step--1);
		color: var(--text2);
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
		// margin-top: auto;
		// margin: 1rem 0;
		align-items: center;
	}

	.left-col {
		align-items: start;
	}

	.right-col {
		// margin-top: auto;
	}
</style>
