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

<style lang="scss">
	.hero-banner {
		margin: 4em 0;
		margin-bottom: calc(4em + 73px);

		h1,
		h2 {
			margin: 0;
			max-width: 50ch;
		}

		h2 {
			font-size: var(--step-1);
			color: #429ef3;
			color: #999;
		}
	}
</style>
