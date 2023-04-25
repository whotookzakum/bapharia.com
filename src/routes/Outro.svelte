<script>
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
    ];

    let playAnimation = true;
</script>

<input type="checkbox" bind:checked={playAnimation} />

<div class="outro-wrapper" class:unfold={playAnimation}>
    <div id="a-letter" class="box">
        <h2>Hey there!</h2>
        <p>
            Thanks for visiting, whether it's your first time or 1000th time.
            This site is committed to being a comprehensive resource for BLUE
            PROTOCOL players.
        </p>
        <p>
            <b>Bapharia will always be free to use.</b> If the site has been helpful
            to you, please consider supporting me so I can continue adding awesome
            features!
        </p>
        <p>
            <b>The best way to help out is to disable ad blockers</b> on the
            site (<i>if you use one</i>). Ads keep me interested in updating and
            maintaining the site ☺️.
        </p>
        <p>
            <b>If you'd like to send me a tip</b>, you can do so on
            <a
                href="https://ko-fi.com/whotookzakum"
                class="box hover kofi"
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><Icon
                    icon="simple-icons:kofi"
                    height="18"
                    color="white"
                    style="margin-bottom: -3px"
                /> Ko-Fi</a
            >,
            <a
                href="https://www.patreon.com/zakum"
                class="box hover patreon"
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><Icon
                    icon="logos:patreon"
                    height="15"
                    style="margin-bottom: -1px"
                /> Patreon</a
            >, or
            <!-- <a
                href=""
                class="box hover paypal"
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><Icon icon="logos:paypal" style="margin-bottom: -1px" /> PayPal</a>.  -->
            Donations are very much appreciated and never required. Donors
            will be given a special discord role, with exclusive channel access.
        </p>
        <p>
            <b>Other ways you can help</b> include subbing on
            <a
                href="https://www.youtube.com/zakum?sub_confirmation=1"
                class="box hover youtube"
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><Icon icon="logos:youtube-icon" height="12" /> YouTube</a
            >, following on
            <a
                href="https://www.twitch.tv/playmaple3"
                class="box hover twitch"
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><Icon
                    icon="cib:twitch"
                    height="16"
                    style="margin-bottom: -1px"
                /> Twitch</a
            >, joining the
            <a
                href="https://discord.gg/ZKwhn3a4yH"
                class="box hover discord"
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><Icon icon="logos:discord-icon" height="13" /> Discord</a
            > server, and sharing Bapharia with your friends!
        </p>
        <p>
            Thanks for always stopping by,<br />
            Zakum
        </p>
        <span class="skip-std">貴公らのたびに幸運があらんことを。</span>
    </div>
    <div id="credits" class="box">
        <h3>Credits</h3>
        <h4>Created By</h4>
        <p>Zakum</p>
        <h4>Supporters</h4>
        <p>Masi, Perazok, sano, Analeigh, Banana Ghost King, Flynnrir, Xeirn</p>
        <!-- <h4>Translations</h4>
        <p>
            Rubens "Ryuno" Moreira <sup>(PT-BR)</sup><br />
            Sniper Mask <sup>(RU)</sup><br />
            vadimhalo <sup>(RU)</sup>
        </p> -->
        <h4>Special Thanks</h4>
        <p>
            Tan, Santa, Maru, Sigmy, tiny, Rhy, Kazarune, owl, SaintMorning,
            Ando, marko, Voldy, IncinerateZ
        </p>
        <h4>References</h4>
        <p class="references flex g-25">
            {#each references as item}
                <span
                    ><a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer">{item.name}</a
                    ></span
                >
            {/each}
        </p>
        <h4>Game Contents</h4>
        <p>
            BLUE PROTOCOL is a trademark of BANDAI NAMCO ONLINE INC. & BANDAI
            NAMCO STUDIOS INC.
        </p>
    </div>
</div>

<!-- Discord membership, Discord nitro, Youtube membership, Youtube super thanks etc. -->
<style lang="scss">
    .outro-wrapper {
        display: grid;
        place-content: center;
        justify-items: center;
        position: relative;
    }

    .unfold {
        #a-letter {
            transform: translateX(-49.5%) rotate(-0deg);
        }
        #credits {
            transform: translateX(49.5%) rotate(0deg);
        }
    }

    #a-letter,
    #credits {
        width: 50ch;
        padding: 1rem 2rem;
        transition: transform 1s cubic-bezier(0.48, 0.08, 0.32, 0.85);
    }

    #a-letter {
        position: relative;
        z-index: 5;

        .skip-std:last-child {
            color: var(--accent);
        }
    }

    #credits {
        position: absolute;
        margin: auto;
        z-index: 1;
        height: 100%;
        background: var(--surface2);
        border-color: var(--surface3);

        p {
            margin: 0;
        }
    }

    h2,
    h3 {
        margin: 0;
    }

    h4 {
        font-size: var(--step--1);
        color: var(--accent);
    }

    .references {
        flex-wrap: wrap;

        span:not(:last-child)::after {
            content: ",";
        }

        a {
            white-space: nowrap;
        }
    }

    .box.hover {
        padding: 0.25rem 0.4rem;
        white-space: nowrap;
        line-height: 2.1;
        background: var(--surface2);
        border-color: var(--surface3);

        &:hover,
        &:focus-visible {
            background: var(--surface3);
        }
    }

    .skip-std {
        font-size: var(--step-1);
    }

    .kofi {
        color: white;
    }

    .patreon {
        color: #ff424d;
    }

    .youtube {
        color: #ea3223;
    }

    .twitch {
        color: #9146ff;
    }

    .discord {
        color: #5865f2;
    }

    // .paypal {
    //     color: #009cde;
    // }

    :global(.kofi) {
        position: relative;

        &::before {
            content: "";
            z-index: 1;
            top: 10px;
            left: 8px;
            width: 11px;
            height: 9px;
            position: absolute;
            background: #ff5e5b;
        }
    }

    :global(.kofi svg) {
        position: relative;
        z-index: 2;
    }
</style>
