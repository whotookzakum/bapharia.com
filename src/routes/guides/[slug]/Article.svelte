<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
	export let title, author, date, caption, category, featuredImg;
	const formattedDate = new Date(date).toLocaleDateString()
</script>

<MetaTags title={`${title} — Bapharia`} description={caption} />

<article>
	<header >
		<img src={featuredImg} alt="" loading="lazy">
		<h1>{title}</h1>
		
		<p class="skip-std">
			By {author} <br/>
			Last updated {formattedDate}
		</p>
	</header>
	<slot />
</article>
