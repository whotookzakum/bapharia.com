<script>
	export let title;
	export let id;
</script>

<iframe
	class="video"
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
