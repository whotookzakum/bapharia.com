<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import references from "./references.json";
</script>

<MetaTags
    title={`About — Bapharia`}
    description={`About Bapharia. Site credits and links to referenced material.`}
/>

<div class="wrapper">
    <div class="inner-wrapper flex">
        <h1>About</h1>
        <div class="logo-wrapper">
            <img
                src="/images/logo512.png"
                alt="Bapharia Logo"
                width="128"
                height="128"
            />
        </div>
        <article>
            <h2>Credits</h2>
            <p>Created by Zakum</p>
            <h3>Donors</h3>
            <p>Masi, Perazok, Banana Ghost King, Xeirno, Rimuru, Tan, FTN</p>
            <h3>Special Thanks</h3>
            <!-- <p style="color: var(--text1); font-size: var(--step-1)">Special thanks to everyone who contributed to this project.</p> -->
            <p class="small-gray">
                Tan, Santa, Maru, Sigmy, tiny, Rhy, Kazarune, owl,
                Ando, marko, Voldy, IncinerateZ, mrarm
            </p>
            <h3>Referenced Material</h3>
            <ul class="unstyled-list grid g-25" role="list">
                {#each references as reference}
                    <li>
                        <a
                            href={reference.link}
                            rel="noopener nofollow noreferrer"
                            target="_blank">{reference.name}</a
                        >
                    </li>
                {/each}
            </ul>
            <hr />
            <p style="font-size: var(--step--1)">
                BLUE PROTOCOL is a trademark of BANDAI NAMCO ONLINE INC. &
                BANDAI NAMCO STUDIOS INC.
            </p>
        </article>
    </div>
</div>

<style lang="scss">
    .wrapper {
        margin: auto;
        width: fit-content;
    }

    .inner-wrapper {
        justify-content: start;
        align-items: center;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .logo-wrapper {
        display: grid;
        place-items: center;
        flex: 1;
        flex-basis: 300px;
        width: clamp(200px, 80vw, 300px);
        opacity: 0.78;

        img {
            width: 100%;
            height: auto;
            max-width: 40vw;
        }
    }

    h2 {
        margin: 0;
    }

    h1 {
        margin-top: 1rem;
        flex-basis: 100%;
    }

    article {
        flex-basis: 55ch;
    }

    p {
        font-size: var(--step-0);
        color: var(--text2);
    }

    ul.unstyled-list {
        margin-block: 0.5rem 1rem;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr;
        font-size: var(--step--1);
    }

    @media (max-width: 1150px) {
        h1 {
            margin-top: calc(1rem + 62px);
        }
    }
</style>
