<script>
	const references = [
		{
			name: "Beater's Guide",
			link: "https://docs.google.com/document/d/1zLKK_ZkcXPyNR3yLarz1r2LOjcwi200vLeBDwXIFBF0/edit",
		},
		{
			name: "H1G",
			link: "https://h1g.jp/blue-protocol/",
		},
		{
			name: "Info Database",
			link: "https://blue-protocol.info",
		},
		{
			name: "Ranpon",
			link: "https://burupuro-kouryaku.com/",
		},
		{
			name: "Bonyou",
			link: "https://bonyou.info/blue-protocol/",
		},
		{
			name: "Kanbatch",
			link: "https://baskmedia.jp/blue-protocol/",
		},
		{
			name: "Asterleeds.com",
			link: "https://asterleeds.com/maps",
		},
		{
			name: "The Luno",
			link: "https://www.the-luno.com/blue-protocol/",
		},
		{
			name: "Tokka",
			link: "https://gamebattleroyal.com/blue-protocol-zokusei/",
		},
		{
			name: "MSFL",
			link: "https://msfl.tokyo/blue-protocol-imagine#toc3",
		},
		{
			name: "JP Wiki",
			link: "https://blueprotocol.swiki.jp/",
		},
	];
</script>

<h2>Credits</h2>

<h3>Created By</h3>
<span>Zakum</span>

<h3>Supporters</h3>
<span>Masi, Perazok</span>

<h3>Translations</h3>
<span>
	Rubens "Ryuno" Moreira <sup>(PT-BR)</sup><br />
	Sniper Mask <sup>(RU)</sup><br />
	vadimhalo <sup>(RU)</sup>
</span>

<h3>Special Thanks</h3>
<span
	>Tan, Santa, Maru, Sigmy, tiny, Rhy, Kazarune, owl, SaintMorning, Ando</span
>

<h3>References</h3>
<ul>
	<!-- {#each references as item}
		<li>
			<a href={item.link} target="_blank" rel="noopener noreferrer"
				>{item.name}</a
			>
		</li>
	{/each} -->
</ul>

<div class="references">
	{#each references as item}
		<a href={item.link} target="_blank" rel="noopener noreferrer"
			>{item.name}</a
		>
	{/each}
</div>

<h3>Game Contents</h3>
<span>
	BLUE PROTOCOL is a trademark of BANDAI NAMCO ONLINE INC. & BANDAI NAMCO
	STUDIOS INC.
</span>

<style lang="scss">
	h3 {
		font-size: var(--step--1);
		color: var(--accent);
	}

	.references a:not(:last-child) {
		margin-right: 0.5ch;
		line-height: 1.6;

		&::after {
			content: ",";
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 0;
	}
</style>
