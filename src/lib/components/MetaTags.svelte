<script>
	import { page } from "$app/stores";
	export let title;
	export let description;
	export let image = "/images/banner_seasonpointscalc.png";
	export let readingTime = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta name="theme-color" content="#ffffff" />
	<link rel="canonical" href={`https://bapharia.com${$page.url.pathname}`} />
	<meta name="twitter:card" content="summary_large_image" key="misc-card" />
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
