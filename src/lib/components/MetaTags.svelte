<script>
	export let title,
		description,
		image,
		color = undefined;
</script>

<svelte:head>
	<title>{title} // BAPHARIA</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`/${image}.png`} />
	<meta name="theme-color" content={color} />
    <!-- <meta name="twitter:card" content="summary_large_image" key="misc-card" /> -->
</svelte:head>
