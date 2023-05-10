<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import MetaTags from "$lib/components/MetaTags.svelte";
	import { onMount } from "svelte";
	export let title, author, date, caption, category, bannerImg, thumbImg;
	const formattedDate = new Date(date).toLocaleDateString();

	// onMount(() => {
	// 	const anchors = document.querySelectorAll(".toc a");
	// 	console.log(anchors);

	// 	anchors.forEach((anchor) => {
	// 		anchor.addEventListener("click", (e) => {
	// 			const targetId = new URL(anchor.href).hash.replace("#", "");
	// 			const target = document.getElementById(targetId);
	// 			console.log(target);
	// 			e.preventDefault();
	// 			window.scrollTo({
	// 				top: target.offsetTop,
	// 				behavior: "smooth",
	// 			});
	// 			window.history.pushState(_, "", "/hello")
	// 		});
	// 	});
	// });
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
