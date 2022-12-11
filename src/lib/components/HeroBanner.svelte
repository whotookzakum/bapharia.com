<script>
	export let title;
	export let author;
	export let subtext;
</script>

<header class="hero-banner">
	<h1 class="title">{title}</h1>
	{#if author}
		<span class="author">{author}</span>
	{/if}
	<span class="subtext">{subtext}</span>
</header>

<style lang="scss">
	.hero-banner {
		padding: var(--space-2xl) 0;
		// background-image: url('/images/op.png');
		// background-size: 100%;
		// background-position: 50% 50%;
		// background-repeat: no-repeat;

		.title {
			margin: 0;
			// max-width: 20ch;
			margin-bottom: 1rem;
		}

		.author, 
		.subtext {
			display: block;
			margin: 0;
			max-width: 50ch;
			font-size: var(--step-0);
			color: var(--accent);
			// line-height: 1.75;
		}
	}
</style>
