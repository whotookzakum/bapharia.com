<script>
	import { page } from "$app/stores";
	export let title,
		description = undefined;
	export let color = "#ffffff";
	export let image = "/favicon.png";
	export let bigImage = false;
	export let readingTime = false;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta name="theme-color" content={color} />
	<link rel="canonical" href={`https://bapharia.com${$page.url.pathname}`} />
	{#if bigImage}
		<meta
			name="twitter:card"
			content="summary_large_image"
			key="misc-card"
		/>
	{/if}
	{#if readingTime}
		<meta name="twitter:label1" content="Reading time" />
		<meta
			name="twitter:data1"
			content={readingTime > 1
				? readingTime + " minutes"
				: readingTime + " minute"}
		/>
	{/if}
</svelte:head>
