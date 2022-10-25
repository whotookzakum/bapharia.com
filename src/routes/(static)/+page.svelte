<script>
	import { onMount } from 'svelte';
	import HeroBanner from '../../lib/components/HeroBanner.svelte';
	import StickyNote from '../../lib/components/StickyNote.svelte';
	import Box from '../../lib/components/Box.svelte';
	import latestNews from '../../lib/data/latestNews.json';
	import gameUpdates from '../../lib/data/gameUpdates.json';
	import changelog from '../../lib/data/changelog.json';
	import { t } from '../../lib/functions/i18n';
	import en from '/src/lib/locales/en/pages/index.json';
	import ja from '/src/lib/locales/ja/pages/index.json';
	const resource = en;

	onMount(() => {
		console.log(navigator.language);
	});
</script>

<HeroBanner title={t('pageTitle', resource)} subtext={t('pageSlug', resource)} />
<article>
	<section>
		<h3>{t('whatIsBP_title', resource)}</h3>
		<p>{t('whatIsBP_description', resource)}</p>
		<p>{t('whatIsBP_description2', resource)}</p>

		<h3>{t('whatIsBapharia_title', resource)}</h3>
		<p>
			{@html t('whatIsBapharia_description', resource, {
				'1': '<a href="/map">',
				'2': '</a>',
				'3': '<a href="/skills">',
				'4': '<a href="/crafting">'
			})}
		</p>
		<StickyNote type="tip">
			{t('baphariaNameExplanation', resource)}
		</StickyNote>
		<p>
			{@html t('whatIsBapharia_description2', resource, {
				'1': '<a href="https://discord.gg/ZKwhn3a4yH" target="_blank" rel="noreferrer noopener nofollow">',
				'2': '</a>'
			})}
		</p>
	</section>
	<aside class="updates-column">
		<Box 
			title="Latest News" 
			item={latestNews[0]} 
			href="/news" 
			linkText="View all news.." 
		/>
		<Box
			title="Game Updates"
			item={gameUpdates[0]}
			href="/game-updates"
			linkText="View all versions.."
		/>
		<Box 
			title="Site Updates" 
			item={changelog[0]} 
			href="/changelog" 
			linkText="View all changes.." 
		/>
	</aside>
</article>

<style lang="scss">
	article {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--space-m);
		margin-top: var(--space-xl);

		h3:first-of-type {
			margin: 0;
		}
	}

	.updates-column {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}
</style>