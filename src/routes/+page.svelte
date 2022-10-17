<script>
	import { onMount } from 'svelte';
	import HeroBanner from '../lib/components/HeroBanner.svelte';
	import Item from '../lib/components/Item.svelte';
	import ItemList from '../lib/components/ItemList.svelte';
	import { t } from '../lib/functions/i18n';
	import en from '/src/lib/locales/en/pages/index.json';
	import ja from '/src/lib/locales/ja/pages/index.json';
	const resource = en;

	onMount(() => {
		console.log(navigator.language);
	});
</script>

<HeroBanner title={t('pageTitle', resource)} subtext={t('pageSlug', resource)} />

<!-- <ItemList>
	<Item 
		name="Ancient Flame Bow" 
		type="Axe" 
		itemType="weapon" 
		reqAR=2 
		imgSrc="axe1.png" 
	/>
	<Item 
		name="Ancient Flame Bow" 
		type="Axe" 
		itemType="weapon" 
		reqAR=2 
		imgSrc="axe1.png" 
	/>
	<Item 
		name="Ancient Flame Bow" 
		type="Axe" 
		itemType="weapon" 
		reqAR=2 
		imgSrc="axe1.png" 
	/>
	<Item 
		name="Ancient Flame Bow" 
		type="Axe" 
		itemType="weapon" 
		reqAR=2 
		imgSrc="axe1.png" 
	/>
	<Item 
		name="Ancient Flame Bow" 
		type="Axe" 
		itemType="weapon" 
		reqAR=2 
		imgSrc="axe1.png" 
	/>
	<Item 
		name="Ancient Flame Bow" 
		type="Axe" 
		itemType="weapon" 
		reqAR=2 
		imgSrc="axe1.png" 
	/>
</ItemList> -->

<article>
	<h3>{t('whatIsBP_title', resource)}</h3>
	<p>{t('whatIsBP_description', resource)}</p>
	<p>{t('whatIsBP_description2', resource)}</p>
	<h3>{t('whatIsBapharia_title', resource)}</h3>
	<p>
		{@html t('whatIsBapharia_description', resource, {
			'1': '<a href="/map">',
			'2': '</a>',
			'3': '<a href="/skills">',
			'4': '<a href="/crafting">',
			'5': '<a href="https://discord.gg/ZKwhn3a4yH" target="_blank" rel="noreferrer noopener nofollow">'
		})}
	</p>
</article>

<p style="color: var(--text1)">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus, consequatur,
	temporibus velit cum modi dolorum id mollitia explicabo praesentium nisi tenetur commodi illo
	blanditiis quidem, possimus veniam fuga inventore?
</p>

<p style="color: var(--text2)">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus, consequatur,
	temporibus velit cum modi dolorum id mollitia explicabo praesentium nisi tenetur commodi illo
	blanditiis quidem, possimus veniam fuga inventore?
</p>

<div style="display: flex; color: var(--brand); gap: 3rem;">
	<div style="background: var(--surface1); width: 200px; height: 200px; box-shadow: 0 6px 14px var(--surface-shadow)"></div>
	<div style="background: var(--surface2); width: 200px; height: 200px; box-shadow: 0 6px 14px var(--surface-shadow)"></div>
	<div style="background: var(--surface3); width: 200px; height: 200px; box-shadow: 0 6px 14px 2px var(--surface-shadow)"></div>
</div>
