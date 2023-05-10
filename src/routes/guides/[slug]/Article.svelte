<script>
	import MetaTags from "$lib/components/MetaTags.svelte";
	export let title, author, date, caption, category, bannerImg, thumbImg;
	const formattedDate = new Date(date).toLocaleDateString();
</script>

<MetaTags title={`${title} — Bapharia`} description={caption} />

<div class="bg-img-wrapper">
	<img class="bg-img" src={bannerImg} alt="" loading="lazy" />
</div>

<article>
	<header>
		<h1>{title}</h1>
		<p class="skip-std">
			By {author} <br />
			Last updated {formattedDate}
		</p>
	</header>
	<slot />
</article>
<div class="scroll-tracker" />
