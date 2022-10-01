<script>
	import { onMount } from 'svelte';
	import HeroBanner from '../lib/components/HeroBanner.svelte';
	import { t } from '../lib/functions/i18n';
	import en from '/src/lib/locales/en/pages/index.json';
	import ja from '/src/lib/locales/ja/pages/index.json';
	const resource = en;
	
	onMount(() => {
		console.log(navigator.language);
	})
</script>

<HeroBanner title={t('pageTitle', resource)} subtext={t('pageSlug', resource)} />
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
			'5': '<a href="https://discord.gg/ZKwhn3a4yH" target="_blank" rel="noreferrer noopener nofollow" />'
		})}
	</p>
</article>
