<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
	import StickyNote from "$lib/components/StickyNote.svelte";
</script>

<MetaTags
	title="Guides — Bapharia"
	description="Comprehensive guides covering core game mechanics in BLUE PROTOCOL. Stats, formulas, and hidden mechanics explained."
/>

<article class="main-pane">
	<hgroup>
		<p class="mini-header">Bapharia</p>
		<h1>Guides</h1>
		<p>
			Comprehensive guides covering core game mechanics in BLUE PROTOCOL.
			Stats, formulas, and hidden mechanics explained.
		</p>
	</hgroup>

	<small style="font-size: var(--step-0); color: var(--accent2)"
		>More guides are available in our <a href="/discord">Discord</a>,
		covering more nuanced content.</small
	>
	
	<section>
		<h2>Where should I start?</h2>
		<p>
			If you're just beginning your journey in BLUE PROTOCOL, I
			recommended checking out <a href="/guides/weapons-and-plugs"
				>Weapons</a
			>,
			<a href="/guides/imagine">Imagine</a>, and
			<a href="/guides/combat#elements">Elements</a> first.
		</p>
		<p>
			The <a href="/guides/combat">Combat</a> guide is quite lengthy, but it
			has a lot of useful details and formulas, so you may want to skim through
			it.
		</p>
		<p>
			These articles are meant to give you a brief overview. Combining
			your knowledge with other resources like the <a href="/map">Map</a>
			and <a href="/db">Database</a> will ensure you have the best experience
			possible.
		</p>
		<p>
			<strong>Guides are only available in English.</strong>
		</p>
	</section>
</article>

<style lang="scss">
	ul.card-grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-s-m);
		margin: var(--space-s-m) 0;
		max-width: 100%;

		li {
			max-inline-size: none;
		}
	}
</style>
