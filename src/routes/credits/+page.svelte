<script>
	import PageFooter from "../../lib/components/PageFooter.svelte";

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

		supporters: ['Masi', 'Perazok'],

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

<div class="credits">
	<h1>Credits</h1>
	<article>
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
					<li>{item.name} <sup>({item.language})</sup></li>
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
		<section>
			<h3>Game Contents</h3>
			<span>BLUE PROTOCOL is a trademark of BANDAI NAMCO ONLINE INC. & BANDAI NAMCO STUDIOS INC.</span>
		</section>
	</article>
</div>
<PageFooter />

<style lang="scss">

	.credits {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		max-width: 600px;
		margin: auto;
	}

	article {
		padding-top: 25vh;
		margin: 0;
		padding-bottom: 0;

		ul {
			padding: 0;
			list-style: none;
			color: var(--text2);
		}

		span {
			font-size: var(--step--1);
			color: var(--text2);
		}
	}

	h1 {
		position: sticky;
		top: 0;
		height: fit-content;
		margin: 0;
		padding: 0 1rem;
		grid-column: 1;
		padding-top: 25vh;
	}

	@media (max-width: 600px) {
		.credits {
			margin: auto;
		}

		h1 {
			position: unset;
		}

		article {
			padding-top: 0;
		}
	}
</style>
