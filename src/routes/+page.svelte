<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
	import Icon from "@iconify/svelte";
</script>

<MetaTags
	title="HOME"
	description="The premier information hub for BLUE PROTOCOL. Theorycrafting, guides, and leaks—all in one place!"
	image="favicon"
	color="#fff"
/>
<div class="all">
	<header />
	<main>
		<img src="/images/logo.png" alt="" />
		<h1>Bapharia 2.0</h1>
		<p>Hang tight, updates are coming soon.</p>
	</main>
	<footer>&copy; 2021-2023 Bapharia.com</footer>
</div>

<style global lang="scss">
	.all {
		display: grid;
		text-align: center;
		padding: 1em;
		height: 100vh;
		align-content: space-between;
		justify-items: center;
		
		* {
			margin: 0;
		}

		p {
			color: var(--accent);
		}
	}

	footer {
		display: flex;
		justify-content: center;
		gap: 1rem;
		width: 100%;
		color: gray;
		font-size: var(--step--1);
	}
</style>
