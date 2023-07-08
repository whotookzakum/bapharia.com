<script>
	import HeroBanner from "$lib/components/HeroBanner.svelte";
	import MetaTags from "$lib/components/MetaTags.svelte";
	import Video from "$lib/components/Video.svelte";
	import partners from "./partners.json";
</script>

<MetaTags
	title="Bapharia — The premier knowledge base for BLUE PROTOCOL."
	description="The premier knowledge base for BLUE PROTOCOL. Interactive tools, game database, and guides—all in one place!"
/>

<HeroBanner>
	<img src="/images/logo.png" alt="" width="96" height="96" />
	<h1>Bapharia</h1>
	<p class="hero-tagline">The premier knowledge base for BLUE PROTOCOL.</p>
	<div class="header-links flex g-50">
		<a href="/guides" class="btn btn-primary">Guides</a>
		<a href="/db" class="btn btn-fadein">Database</a>
		<a href="/map" class="btn btn-fadein">Map</a>
	</div>
</HeroBanner>

<section id="featured" class="bg-bleed centered-section">
	<div class="unbleed">
		<h2 style="margin-bottom: 1rem">Featured</h2>
		<small
			>The lastest uploads from our partners are featured here.</small
		>
		<ol class="unstyled-list featured-videos-grid grid">
			<li>
				<Video title="" id="SEuQJGsSCWA" bleed radius="0.5rem" />
			</li>
			<li>
				<Video title="" id="Dk5LnwQER1M" bleed radius="0.5rem" />
			</li>
			<li>
				<Video title="" id="w8O_HUoW6pI" bleed radius="0.5rem" />
			</li>
		</ol>
		<h3>Partners</h3>
		<div class="partners">
			{#each partners as partner, index}
				<div
					class="partner"
					style:order={partners.length - index}
					style:z-index={partners.length + index}
				>
					<img
						class="avatar"
						src={partner.avatar}
						alt=""
						width="96"
						height="96"
					/>
					<div class="hidden">
						<p>{partner.name}</p>
						<div class="partner-links flex g-50">
							{#if partner.twitch}
								<a
									class="twitch"
									rel="noopener nofollow noreferrer"
									target="_blank"
									href={partner.twitch}
								>
									<img
										src="/images/partners/TwitchGlitchPurple.svg"
										alt="Twitch"
										width="21"
									/>
								</a>
							{/if}
							{#if partner.youtube}
								<a
									class="youtube"
									rel="noopener nofollow noreferrer"
									target="_blank"
									href={partner.youtube}
								>
									<img
										src="/images/partners/youtube-icon.svg"
										alt="YouTube"
										height="18"
									/>
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">

	.hero-tagline {
		font-size: var(--step-4);
        max-inline-size: none;
        margin-top: 0;
        font-weight: 500;
	}

	.header-links {
		margin: auto;
		justify-content: center;
	}

	section {
		padding-block: 5vh;
	}

	// PARTNERS ==========================================================

	#featured {
		width: 100%;
		background: var(--surface1);
		border-top: 1px solid var(--surface2);
		padding-inline: var(--space-xs);

		h2 {
			margin: 0;
			margin-bottom: 0.5rem !important;
		}
	}

	:global(#featured .video) {
		margin: 0;
	}

	.featured-videos-grid {
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		gap: var(--space-xs);
		margin-top: var(--space-xs);

		li {
			max-inline-size: none;
		}
	}

	.partners {
		display: inline-flex;
		// background: blue;
		max-width: 100ch;
		flex-wrap: wrap;
		justify-content: center;

		&:where(:hover, :focus-within)
			.partner:not(:where(:focus-within, :hover)) {
			filter: saturate(0) brightness(0.7);
		}
	}

	.partner {
		padding: 0.5rem;
		margin-inline: -20px;
		z-index: 1;
		transition: filter 0.4s ease;

		.hidden {
			opacity: 0;
			transform: translateY(20%);
			transition: all 0.2s ease;
		}

		&:where(:hover, :focus-within) .hidden {
			opacity: 1;
			transform: translateY(0);
		}

		&:where(:hover, :focus-within) .avatar {
			transform: translateY(-5%);
		}

		p {
			font: inherit;
			margin: 0.5rem 0;
		}

		.avatar {
			border-radius: 50%;
			padding: 0;
			// padding: 0.2rem;
			box-sizing: content-box;
			background: var(--surface1);
			display: block;
			transition: all 0.2s ease;
		}

		.partner-links {
			justify-content: center;
			flex-wrap: wrap;

			a {
				border: none;
				display: flex;
				align-items: center;

				&:hover,
				&:focus-visible {
					filter: brightness(0.8);
				}
			}
		}
	}
</style>
