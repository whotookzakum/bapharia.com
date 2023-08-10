<script>
	import Card from "./Card.svelte";
	import MetaTags from "$lib/components/MetaTags.svelte";
	import HeroBanner from "$lib/components/HeroBanner.svelte";
	export let data;

	// TODO favorites, filters, sort A-Z/last updated

	const guides = data.guides;
</script>

<MetaTags
	title={`Guides — Bapharia`}
	description={`Guides for BLUE PROTOCOL. Learn about game mechanics, find strategy guides, and check reference sheets!`}
/>

<HeroBanner
	bannerUrl="/UI/Adventurer/UI_AdventurerRank_Mark03.png"
	style="background-size: 339px 345px !important; background-repeat: no-repeat; --backdrop-opacity: 0.5"
>
	<h1>Guides</h1>
	<p style:margin-top="0">
		Guides covering core aspects of BLUE PROTOCOL—game mechanics, strategy
		guides, and reference sheets. More guides can be found on our <a
			href="/discord">discord</a
		>!
	</p>
</HeroBanner>

<ul class="card-grid unstyled-list" role="list">
	{#each guides as guide}
		<li>
			<Card {guide} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul.card-grid {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-s-m);
		margin: var(--space-s-m) 0;
		max-width: 100%;

		li {
			max-inline-size: none;
		}
	}
</style>
