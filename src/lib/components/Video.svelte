<script>
	export let title = "";
	export let id = "";
	export let bleed = false;
	export let style = null;
	export let radius = "1rem"
</script>

<iframe
	class="video"
	class:full-bleed={bleed}
	style:border-radius={radius}
	title="Video showcasing {title}"
	src="https://www.youtube.com/embed/{id}"
	allow="fullscreen"
	{style}
/>

<style>
	.video {
		width: 100%;
		border: none;
		padding: 0;
		aspect-ratio: 16/9;
		margin-top: var(--space-xs);
	}
</style>
