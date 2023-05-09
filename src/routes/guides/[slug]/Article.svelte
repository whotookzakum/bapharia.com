<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
	export let title, author, date, caption, category, featuredImg;
</script>

<MetaTags title={`${title} — Bapharia`} description={caption} />

<article>
	<header>
		<h1>{title}</h1>
		<span>By {author}</span>
		<span>Last updated {date}</span>
	</header>
	<slot />
</article>