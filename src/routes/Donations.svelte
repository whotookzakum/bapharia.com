<script>
    import Icon from "@iconify/svelte";
</script>

<h2>Hey there!</h2>
<p>
    Thanks for visiting, whether it's your first time or 1000th time. After
    hundreds of hours, here's a resource that <i>hopefully</i> provides players with
    exactly what they need.
</p>
<p>
    <b>Bapharia will always be free to use.</b> If the site has been helpful to you,
    please consider supporting me so I can continue adding awesome features!
</p>
<p>
    <b>The best way to help out is to disable ad blockers</b> on the site (<i
        >if you use one</i
    >). Ads keep me interested in updating and maintaining the site ☺️.
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
        ><Icon icon="logos:patreon" height="15" style="margin-bottom: -1px" /> Patreon</a
    >, or
    <a
        href=""
        class="box hover paypal"
        target="_blank"
        rel="noopener noreferrer nofollow"
        ><Icon icon="logos:paypal" style="margin-bottom: -1px" /> PayPal</a
    >. Donations are very much appreciated and never required. Donors will be
    given a special discord role, with exclusive channel access.
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
        ><Icon icon="cib:twitch" height="16" style="margin-bottom: -1px" /> Twitch</a
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

<!-- Discord membership, Discord nitro, Youtube membership, Youtube super thanks etc. -->
<style lang="scss">
    .box {
        padding: 0.25rem 0.4rem;
        white-space: nowrap;
        line-height: 2.1;
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

    .paypal {
        color: #009cde;
    }

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
