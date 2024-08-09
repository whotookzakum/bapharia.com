<script>
	import "$lib/styles/globals.scss";
	import { page } from "$app/stores";
</script>

<div class="wrapper">
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
</div>

<style>
	.wrapper {
		max-width: var(--content-width);
		display: grid;
		width: 100%;
		padding: 0 1em;
		margin: 0 auto;
		place-content: center;
	}
	span {
		font-size: var(--step-0);
		color: var(--accent1);
	}
</style>
