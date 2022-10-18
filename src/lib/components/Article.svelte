<script>
	import AnchorJS from 'anchor-js';
	import { onMount } from 'svelte';
	import HeroBanner from './HeroBanner.svelte';
	export let title;
	export let author;
	export let date;

	onMount(() => {
		const anchors = new AnchorJS();
		anchors.add('article h2');
		anchors.add('article h3');
	});
</script>

<HeroBanner {title} author="By {author}" subtext="Last updated {date}" />

<article>
	<slot />
</article>
