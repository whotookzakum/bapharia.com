<script>
<<<<<<< HEAD
	import "$lib/styles/globals.scss";
	import { page } from "$app/stores";
</script>

<div class="wrapper">
=======
	import '../lib/styles/globals.scss';
	import { page } from '$app/stores';
</script>

<main>
>>>>>>> bcbc495587ac3ffd2872f9134abda2b4d0098f42
	<h1>{$page.status}</h1>
	{#if $page.status === 404}
		<span>The requested page could not be found.</span>
		<p>
			Check to make sure the URL is correct. If you think this is a
			mistake, let us know on <a
				href="/discord"
				target="_blank"
				rel="noopener noreferrer">Discord</a
			>.
		</p>
	{/if}
<<<<<<< HEAD
</div>
=======
</main>
>>>>>>> bcbc495587ac3ffd2872f9134abda2b4d0098f42

<style>
	.wrapper {
		max-width: 1400px;
		display: grid;
		width: 100%;
		padding: 0 1em;
		margin: 0 auto;
		place-content: center;
	}
	span {
		font-size: var(--step-0);
		color: var(--accent);
	}
</style>
