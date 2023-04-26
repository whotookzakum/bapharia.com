<script>
	import PageFooter from "../../lib/components/PageFooter.svelte";
	export let title;
	export let author;
	export let date;
</script>

<article class="guide">
	<header>
		<h1>{title}</h1>
		<span>By {author}</span>
		<span>Last updated {date}</span>
	</header>
	<slot />
</article>
<PageFooter />
