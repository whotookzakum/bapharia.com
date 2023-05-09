<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
	import PageFooter from "../../lib/components/PageFooter.svelte";
	export let title, author, date, caption;
</script>

<MetaTags title={`${title} — Bapharia`} description={caption} />
<article class="guide">
	<header>
		<h1>{title}</h1>
		<span>By {author}</span>
		<span>Last updated {date}</span>
	</header>
	<slot />
</article>
<PageFooter />
