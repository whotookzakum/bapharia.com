<script>
	export let title;
	export let author = undefined;
	export let subtext;
</script>

<header class="hero-banner">
	<h1>{title}</h1>
	{#if author}
		<h2>{author}</h2>
	{/if}
	<h2>{subtext}</h2>
</header>
