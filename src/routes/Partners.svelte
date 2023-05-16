<script>
    import Icon from "@iconify/svelte";

    const partners = [
        {
            name: "BP Central",
            avatar: "/images/partners/bpcentral.jpg",
            links: [
                {
                    name: "Twitch",
                    href: "https://www.twitch.tv/work2game",
                },
                {
                    name: "YouTube",
                    href: "https://www.youtube.com/channel/UCRcXTnnHlsmCZu3cdv2TnvQ",
                },
            ],
        },
        {
            name: "Sethphir",
            avatar: "/images/partners/sethphir.png",
            links: [
                {
                    name: "Twitch",
                    href: "https://www.twitch.tv/sethphir",
                },
                {
                    name: "YouTube",
                    href: "https://www.youtube.com/sethphir",
                },
            ],
        },
        {
            name: "Maygi",
            avatar: "/images/partners/maygi.jpg",
            links: [
                {
                    name: "Twitch",
                    href: "https://www.twitch.tv/maygii",
                },
                {
                    name: "YouTube",
                    href: "https://www.youtube.com/maygi",
                },
            ],
        },
        {
            name: "TergoLive",
            avatar: "/images/partners/tergolive.png",
            links: [
                {
                    name: "Twitch",
                    href: "https://www.twitch.tv/tergolive",
                },
                {
                    name: "YouTube",
                    href: "https://www.youtube.com/tergolive",
                },
            ],
        },
        {
            name: "Kyrios Yuudai",
            avatar: "/images/partners/kyrios.jpg",
            links: [
                {
                    name: "Twitch",
                    href: "https://www.twitch.tv/kyriosyuudai",
                },
                {
                    name: "YouTube",
                    href: "https://www.youtube.com/kyriosyuudai",
                },
            ],
        },
    ];
</script>

<h2 style="margin-bottom: 1rem">Partners</h2>
<div class="partners-grid grid">
    {#each partners as partner}
        <div class="partner box">
            <img
                class="avatar box"
                src={partner.avatar}
                alt=""
                width="96"
                height="96"
            />
            <h3>{partner.name}</h3>
            <div class="links flex g-50">
                {#each partner.links as link}
                    <a
                        class:youtube={link.name === "YouTube"}
                        class:twitch={link.name === "Twitch"}
                        rel="noopener nofollow noreferrer"
                        target="_blank"
                        href={link.href}
                    >
                        {#if link.name === "YouTube"}
                            <img
                                src="/images/partners/youtube-icon.svg"
                                alt=""
                                height="18"
                            />
                        {/if}
                        {#if link.name === "Twitch"}
                            <img
                                src="/images/partners/TwitchGlitchPurple.svg"
                                alt=""
                                width="21"
                            />
                        {/if}
                        {#if link.name === "Twitter"}
                            <Icon icon="logos:twitter" width="24" />
                        {/if}
                        <span class="visually-hidden">{link.name}</span>
                    </a>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .partners-grid {
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));

    }

    .partner {
        text-align: center;
        padding: 1rem 0.5rem;
    }

    .avatar {
        border-radius: 50%;
        padding: 0;
        border: none;
        background-color: var(--surface2);
        background: none;
    }

    h3 {
        font: inherit;
        margin: 0.5rem 0;
    }

    .links {
        justify-content: center;
        flex-wrap: wrap;

        a {
            border: none;
            display: flex;
            align-items: center;

            &:hover,
            &:focus-visible {
                filter: brightness(0.8);
            }
        }
    }
</style>
