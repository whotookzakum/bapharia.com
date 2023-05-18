<script>
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import PageFooter from "$lib/components/PageFooter.svelte";
	import "$lib/styles/globals.scss";
	import { page } from "$app/stores";
</script>


<div class="wrapper">
	<h1>{$page.status}</h1>
	{#if $page.status === 404}
	<span>The requested page could not be found.</span>
	<p>
		Check to make sure the URL is correct. If you think this is a mistake,
		let us know on <a
			href="https://discord.gg/ZKwhn3a4yH"
			target="_blank"
			rel="noopener noreferrer">Discord</a
		>.
	</p>
{/if}
</div>

<style>
	.wrapper {
		display: grid;
		place-content: center;
		padding: 0 1rem;
		height: 78vh;
	}
	span {
		font-size: var(--step-0);
		color: var(--accent);
	}
</style>
