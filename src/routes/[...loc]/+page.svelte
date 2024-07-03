<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
    import Link from "../../lib/components/Link.svelte";
</script>

<MetaTags
	title="Bapharia — The premier knowledge base for BLUE PROTOCOL."
	description="The premier knowledge base for BLUE PROTOCOL. Interactive tools, game database, and guides—all in one place!"
	image="/images/b.png"
	bigImage
/>

<div class="fullpage">
	<hgroup class="grid gap-4" style="place-items: center; margin-top: 5rem;">
		<!-- <img src="/images/logo.png" alt="" width="96" height="96" /> -->
		<h1><span>The premier knowledge base for</span><mark>Blue Protocol</mark></h1>
		<p>Learn about the game with comprehensive guides and enhance your experience with our interactive tools.</p>
		<a href="/bno">/bno</a>
		<Link href="/db" class="styled-link"></Link>
	</hgroup>
</div>

<!-- <section id="what-is-bapharia" class="bg-bleed centered-section">
	<h2>What is Bapharia?</h2>
	<p>
		Bapharia lends its name from the mysterious religious group in Regnas,
		which has a shrine at the peak of Asterleeds.
	</p>
	<p>バファリアの名は、アステルリーズの街の端に神殿を構える、謎に包まれた宗教に由来する。</p>
	<p>
		This site is dedicated to providing BLUE PROTOCOL players with thorough
		guides and tools to assist them in their journey.
	</p>
	<h3 class="tagline">貴公らの旅に幸運があらんことを。</h3>
</section> -->

<style lang="scss">
	hgroup {
		place-content: center;
		// background: linear-gradient(transparent 33%, #4a1544, #3b2156, #2d2565, #1a2b6b);

		& > *:not(h1), h1 > * {
			opacity: 0;
			animation: 0.4s ease 1 forwards fadeinrise;
		}

		h1 span {
			display: block;
			animation-delay: 200ms;
		}

		h1 mark {
			animation-delay: 400ms;
		}

		p {
			animation-delay: 600ms;
		}
	}

	h1 {
		text-align: center;
		font-size: clamp(1.75rem, calc(0.94rem + 3.6vw), 2.5rem);
	}

	p {
		font-size: var(--step-2);
		max-inline-size: 60ch;
		text-align: center;
		text-wrap: balance;
	}

	h1 mark {
		background: text linear-gradient(to top, #1815df, #00caca);
		color: transparent;
		font-weight: 800;
		text-transform: uppercase;
		display: block;
		font-size: var(--step-7);
		-webkit-box-reflect: below -0.5em linear-gradient(transparent 50%, rgba(255, 255, 255, 0.2));
	}
</style>
