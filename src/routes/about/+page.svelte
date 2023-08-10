<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Icon from "@iconify/svelte";
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
        {
            name: "Panke",
            link: "https://pankeynote.com/category/game/blue-protocol"
        },
        {
            name: "Protocol.blue",
            link: "https://protocol.blue/nt_enemies"
        }
    ];

    // TODO responsive about page
    let playAnimation = true;
</script>

<MetaTags title={`About — Bapharia`} description={`About Bapharia. Site credits and links to referenced material.`} />

<h1>About</h1>

<section class="centered-section">
	<div>
		<h2>Credits</h2>
		<p>Special thanks to everyone who contributed to this project.</p>
		<p class="special-thanks">
			Tan, Santa, Maru, Sigmy, tiny, Rhy, Kazarune, owl, SaintMorning,
			Ando, marko, Voldy, IncinerateZ
		</p>
	</div>
	<hr />
	<div class="grid g-50">
		<h3 style:font-size="var(--step-1)">Referenced Material</h3>
		<ul class="unstyled-list flex g-50" role="list">
			{#each references as reference}
				<li>
					<a
						class="btn btn-fadein"
						style="font-size: var(--step--1); padding: 0.5rem 1rem;"
						href={reference.link}
						rel="noopener nofollow noreferrer"
						target="_blank">{reference.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<hr />
	<p style:color="var(--text2)">
		BLUE PROTOCOL is a trademark of BANDAI NAMCO ONLINE INC. & BANDAI NAMCO
		STUDIOS INC.
	</p>
</section>

<!-- Discord membership, Discord nitro, Youtube membership, Youtube super thanks etc. -->

<style lang="scss">
    .special-thanks {
		// text-transform: uppercase;
		font-size: var(--step-0);
		color: var(--text2);
	}

	ul.unstyled-list {
		margin: auto;
		justify-content: center;
		max-inline-size: 70ch;
		flex-wrap: wrap;
	}
</style>