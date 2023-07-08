<script>
	import "./three-column.scss";
	import PageFooter from "$lib/components/PageFooter.svelte";
	import { page } from "$app/stores";
</script>

<main id="main" class="layout" tabindex="-1" class:three-column={$page.url.pathname.includes("guides/") || $page.url.pathname.includes("classes/")}>
	<slot />
</main>
<PageFooter />