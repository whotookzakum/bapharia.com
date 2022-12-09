<script>
    import HeroBanner from "../../../lib/components/HeroBanner.svelte";
	const credits = {
		translations: [
			{
				name: 'Rubens "Ryuno" Moreira',
				language: 'PT-BR'
			},
			{
				name: 'Sniper Mask',
				language: 'RU'
			},
			{
				name: 'Vadimhalo',
				language: 'RU'
			}
		],

		specialThanks: [
			'Tan',
			'Santa',
			'Maru',
			'Sigmy',
			'Tiny',
			'Rhy',
			'Kazarune',
			'Owl',
			'SaintMorning',
            'Ando'
		],

		supporters: ['Masi', 'Niko'],

		references: [
			{
				name: "Beater's Guide",
				link: 'https://docs.google.com/document/d/1zLKK_ZkcXPyNR3yLarz1r2LOjcwi200vLeBDwXIFBF0/edit'
			},
			{
				name: 'H1G',
				link: 'https://h1g.jp/blue-protocol/'
			},
			{
				name: 'Info Database',
				link: 'https://blue-protocol.info'
			},
			{
				name: 'Ranpon',
				link: 'https://burupuro-kouryaku.com/'
			},
			{
				name: 'Bonyou',
				link: 'https://bonyou.info/blue-protocol/'
			},
			{
				name: 'Kanbatch',
				link: 'https://baskmedia.jp/blue-protocol/'
			},
			{
				name: 'Asterleeds.com',
				link: 'https://asterleeds.com/maps'
			},
			{
				name: 'The Luno',
				link: 'https://www.the-luno.com/blue-protocol/'
			},
			{
				name: 'Tokka',
				link: 'https://gamebattleroyal.com/blue-protocol-zokusei/'
			},
			{
				name: 'MSFL',
				link: 'https://msfl.tokyo/blue-protocol-imagine#toc3'
			},
			{
				name: 'JP Wiki',
				link: 'https://blueprotocol.swiki.jp/'
			},
			{
				name: "owl's Data"
			}
		]
	};
</script>

<HeroBanner title='Credits' subtext='Members who have greatly contributed to the site.' />

<article class="credits">
	<section>
		<h3>Created By</h3>
		<ul>
			<li>Zakum</li>
		</ul>
	</section>
	<section>
		<h3>Supporters</h3>
		<ul>
			{#each credits.supporters as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
	<section>
		<h3>Translations</h3>
		<ul>
			{#each credits.translations as item}
				<li>{item.name} ({item.language})</li>
			{/each}
		</ul>
	</section>
	<section>
		<h3>Special Thanks</h3>
		<ul>
			{#each credits.specialThanks as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
	<section>
		<h3>References</h3>
		<ul>
			{#each credits.references as item}
				<li><a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a></li>
			{/each}
		</ul>
	</section>
</article>

<style lang="scss">
	.credits {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));

		ul {
			padding: 0;
			list-style: none;
			color: var(--text2);
		}
	}
</style>
