<script>
	export let title, description = undefined;
	export let color = "#ffffff"
	export let image = "/favicon.png";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta name="theme-color" content={color} />
    <!-- <meta name="twitter:card" content="summary_large_image" key="misc-card" /> -->
</svelte:head>
