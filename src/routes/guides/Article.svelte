<script>
	import AnchorJS from 'anchor-js';
	import { onMount } from 'svelte';
	export let title;
	export let author;
	export let date;

	onMount(() => {
		const anchors = new AnchorJS();
		anchors.add('h2');
		anchors.add('h3');
	});
</script>

<article>
	<header>
		<h1>{title}</h1>
		<span>By {author}</span>
		<span>Last updated {date}</span>
	</header>
	<slot />
</article>
