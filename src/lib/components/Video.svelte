<script>
	export let title;
	export let id;
	export let bleed;
</script>

<iframe
	class="video"
	class:full-bleed={bleed}
	title="Video showcasing {title}"
	src="https://www.youtube.com/embed/{id}"
	allow="fullscreen"
/>

<style>
	.video {
		width: 100%;
		border: none;
		aspect-ratio: 16/9;
		margin-top: var(--space-xs);
	}
</style>
