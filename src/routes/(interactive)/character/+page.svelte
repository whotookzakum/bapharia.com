<script>
    import { page } from "$app/stores";

    // TODO Linkable params
    // TODO Cached preferences w/ store
    // TODO weapon, skills, b. imagine, e. imagine, shared/class abilities, class


    const links = [
        {
            name: {
                ja_JP: "キャラクター",
            },
            href: "/character",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1MyChara.png",
        },
        {
            name: {
                ja_JP: "所持品",
            },
            href: "/inventory",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Inventory.png",
        },
        {
            name: {
                ja_JP: "クエスト",
            },
            href: "/quest",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Quest.png",
        },
        {
            name: {
                ja_JP: "マップ",
            },
            href: "/map",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Map.png",
        },
        {
            name: {
                ja_JP: "コミュニケート",
            },
            href: "/communicate",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Communicate.png",
        },
        {
            name: {
                ja_JP: "冒険手帳",
            },
            href: "/handbook",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Library.png",
        },
        {
            name: {
                ja_JP: "シーズンパス",
            },
            href: "/season-pass",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1SeasonPass.png",
            disabled: true,
        },
        {
            name: {
                ja_JP: "受信ボックス",
            },
            href: "/mailbox",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Letter.png",
        },
        {
            name: {
                ja_JP: "ミッション",
            },
            href: "/missions",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Mission.png",
            isLarge: true,
        },
        {
            name: {
                ja_JP: "パーティ",
            },
            href: "/party",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Party.png",
            isLarge: true,
        },
        {
            name: {
                ja_JP: "チーム",
            },
            href: "/team",
            icon: "/UI/CommandMenu/CommandMenuIcon1/UI_CommandMenuIcon1Team.png",
            isLarge: true,
        },
        {
            name: {
                ja_JP: "レグナスストア",
            },
            href: "/store",
            icon: "/UI/CommandMenu/CommandMenuIcon1/.png",
            disabled: true,
            isRegnusStore: true,
        },
    ];
</script>

<main>
    <nav class="command-menu grid">
        <ul>
            {#each links as link}
                {#if link.isRegnusStore}
                    <li
                        class="link-wrapper regnus-store flex"
                        class:active={$page.url.pathname.includes(link.href)}
                    >
                        <a
                            class="skip-std link"
                            href={link.href}
                            disabled={link.disabled}
                            aria-disabled={link.disabled}>{link.name.ja_JP}</a
                        >
                    </li>
                {:else if link.isLarge}
                    <li
                        class="link-wrapper large flex"
                        class:active={$page.url.pathname.includes(link.href)}
                    >
                        <div class="icon-wrapper grid">
                            <img
                                src={link.icon}
                                alt=""
                                width="50"
                                height="50"
                            />
                        </div>
                        <a
                            class="skip-std link"
                            href={link.href}
                            disabled={link.disabled}
                            aria-disabled={link.disabled}>{link.name.ja_JP}</a
                        >
                    </li>
                {:else}
                    <li
                        class="link-wrapper flex"
                        class:active={$page.url.pathname.includes(link.href)}
                    >
                        <img src={link.icon} alt="" width="50" height="50" />
                        <a
                            class="skip-std link"
                            href={link.href}
                            disabled={link.disabled}
                            aria-disabled={link.disabled}>{link.name.ja_JP}</a
                        >
                    </li>
                {/if}
            {/each}
        </ul>
    </nav>
    <div class="battle-build">
        <img src="/UI/MyCharaMenu/UI_MyCharaMenuBattleCordeSetHeadingBg.png" alt="">
        <div class="loadout">

        </div>
    </div>
    <div class="bg-elements">
        <img src="/UI/CommandMenu/UI_CommandMenuBgCorner.png" alt="" />
        <img
            class="top-right"
            src="/UI/CommandMenu/UI_CommandMenuBgCorner.png"
            alt=""
        />
        <img
            class="bottom-left"
            src="/UI/CommandMenu/UI_CommandMenuBgCorner.png"
            alt=""
        />
        <img
            class="bottom-right"
            src="/UI/CommandMenu/UI_CommandMenuBgCorner.png"
            alt=""
        />
    </div>
    <nav class="bottom-right-menu flex">
        <a class="link" href="">オプション</a>
        <a class="link" href="">キャラ選択へ戻る</a>
        <a class="link" href="">ゲームを終了する</a>
    </nav>
</main>

<style lang="scss">
    main {
        width: 1920px;
        height: 1080px;
        background-image: url("/UI/CommandMenu/BgAnim/UI_CommandMenuBgAnim01.png");
        position: relative;
        color: white;
    }

    nav.command-menu {
        max-width: 370px;
        gap: 1rem;
        position: relative;
        z-index: 1;
        font-size: var(--step-0);

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            max-inline-size: none;

            li:has(.link[disabled="true"]) {
                opacity: 0.5;
            }
        }

        .link-wrapper {
            position: relative;
            align-items: center;
            gap: 1rem;

            background-image: url("/UI/CommandMenu/UI_CommandMenuBtnBgGrd.png");

            &:not(.large) {
                padding-left: 1.5rem;
            }
        }

        .icon-wrapper {
            background-image: url("/UI/CommandMenu/UI_CommandMenuIconBase.png");
            width: 106px;
            height: 66px;
            place-content: center;
        }

        .regnus-store {
            padding-block: 0.5rem;
            
            a {
                display: flex;
                justify-content: center;
                padding-left: 2rem;
                background-image: url("/UI/CommandMenu/UI_CommandMenuBtnSkyStore.png");
                width: 276px;
                height: 46px;
            }
        }
    }

    .bg-elements {
        position: absolute;
        inset: 0;
        z-index: 0;

        img {
            position: absolute;
            pointer-events: none;
        }

        .top-right {
            top: 0;
            right: 0;
            transform: scaleX(-1);
        }

        .bottom-left {
            bottom: 0;
            left: 0;
            transform: scaleY(-1);
        }

        .bottom-right {
            bottom: 0;
            right: 0;
            transform: scale(-1);
        }

        .middle-right {
            right: 0;
            top: 50%;
            transform: translateY(-50%) scaleX(-1);
        }
    }

    .link {
        border: none;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
        }
    }

    nav.bottom-right-menu {
        width: 1836px;
        height: 50px;
        background-image: url("/UI/CommandMenu/UI_CommandMenuLine1.png");
        position: absolute;
        bottom: 38px;
        right: 0;
        justify-content: flex-end;
        gap: 1rem;
        align-items: center;
        padding-right: 2rem;
    }

    .loadout {
        width: 920px;
        height: 686px;
        background-image: url("/UI/MyCharaMenu/UI_MyCharaMenuBattleCordeBgPattern.png"), url("/UI/MyCharaMenu/UI_MyCharaMenuBattleSetBg.png");
        background-repeat: no-repeat;
        background-position: 100% 0%;
    }
</style>
