<script>
	import PageFooter from "../lib/components/PageFooter.svelte";
	import Database from "$lib/components/database/Database.svelte";
	import Guides from "./Guides.svelte";
	import InteractivePages from "./InteractivePages.svelte";
	import MetaTags from "$lib/components/MetaTags.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
    import Outro from "./Outro.svelte";

	export let data;
</script>

<MetaTags
	title="HOME"
	description="The premier information hub for BLUE PROTOCOL. Theorycrafting, guides, and leaks—all in one place!"
	image="favicon"
	color="#fff"
/>
<Navbar />
<main>
	<header>
		<h1>Bapharia</h1>
		<strong>The premier information hub for BLUE PROTOCOL.</strong>
	</header>

	<section>
		<InteractivePages />
	</section>

	<section>
		<Database />
	</section>

	<section>
		<Guides data={data.guides} />
	</section>

	<section>
		<Outro />
		<PageFooter />
	</section>
</main>

<style global lang="scss">
	main {
		max-width: 1400px;
		display: grid;
		gap: var(--space-xl);
		padding: 0 1em;
		margin: auto;
	}
	h1 {
		margin-top: 20vh;
	}
</style>
