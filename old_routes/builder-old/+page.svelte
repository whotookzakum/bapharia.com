<script>
    import { assetUrl } from "$lib/utils"
    import Icon from "@iconify/svelte";
</script>

<h1>Builder</h1>

<main class="surface1 p-2 grid gap-2" style="margin: 4rem; max-width: 800px;">
    <header class="flex gap-4">
        <img src="/bs.png" alt="" width="128" height="128" />
        <div class="grid content-start flex-1">
            <hgroup>
                <p class="mini-header">From a distant future</p>
                <h2 class="m-0">Zakum</h2>
            </hgroup>
            <p class="flex items-center gap-1">
                <Icon icon="mdi:crown" style="font-size: var(--step-2)" />
                <span>Bapharia</span>
            </p>
            <p class="flex items-center gap-1">
                <Icon icon="mdi:chat" style="font-size: var(--step-2)" />
                <span>EX SPパーティ募集中！</span>
            </p>
            <p class="flex items-center gap-1">
                <Icon icon="mdi:home" style="font-size: var(--step-2)" />
                <span>My Home</span>
            </p>
        </div>
        <div
            class="flex gap-2"
            style="flex-direction: column; align-items: end"
        >
            <div class="flex items-start">
                <img
                    src={assetUrl("/UI/Icon/Award/UI_Icon_100000083.webp")}
                    alt=""
                    width="48"
                    height="48"
                    style="margin-bottom: auto"
                />
                <img
                    src={assetUrl("/UI/Icon/Award/UI_Icon_100000102.webp")}
                    alt=""
                    width="48"
                    height="48"
                    style="margin-bottom: auto"
                />
                <img
                    src={assetUrl("/UI/Icon/Award/UI_icon_110000041.webp")}
                    alt=""
                    width="48"
                    height="48"
                    style="margin-bottom: auto"
                />
                <img
                    src={assetUrl("/UI/Icon/Award/UI_Icon_120000011.webp")}
                    alt=""
                    width="48"
                    height="48"
                    style="margin-bottom: auto"
                />
                <img
                    src={assetUrl("/UI/Icon/Award/UI_Icon_110000022.webp")}
                    alt=""
                    width="48"
                    height="48"
                    style="margin-bottom: auto"
                />
            </div>
            <span class="flex items-center gap-1">
                <img
                    src={assetUrl("/UI/Icon/Achievement/UI_AchievementIcon_1.webp")}
                    alt=""
                    width="32"
                    height="32"
                    style="display: inline"
                />
                <b style="font-size: var(--step-2)">173</b>
            </span>
            <span class="flex items-center gap-2">
                <img
                    src={assetUrl("/UI/PlayerProfile/UI_PlayerProfile_LikeBtn_Pressed.webp")}
                    alt=""
                    width="24"
                    height="24"
                    style="display: inline"
                />
                <b style="font-size: var(--step-2)">11,932</b>
            </span>
        </div>
        <div
            class="p-4 grid place-items-center"
            style="background: var(--bg); aspect-ratio: 1/1; width: 128px; height: 128px;"
        >
            <small class="font-semibold">Blast Archer</small>
            <img
                src={assetUrl("/UI/Icon/Class128/UI_IconClass128_06.webp")}
                alt=""
                width="48"
                height="48"
            />
            <h3 class="m-0" style="line-height: 1">Lv. 70</h3>
        </div>
    </header>
    <div class="p-2 flex gap-1" style="background: var(--surface3); flex-direction: column;">
        <div>
            <ul class="tabs flex gap-1">
                <li>Gear</li>
                <li>Skills</li>
                <li>Outfit</li>
                <li>Album</li>
            </ul>
        </div>

        <div
            class="grid flex-1"
            style="grid-template-rows: 1fr 1fr 1fr 1fr 1fr; grid-template-columns: 1fr 1fr; align-items: center;"
        >
            <img src={assetUrl("/UI/Icon/Weapon/UI_Icon_106001201.webp")} alt="" />
            <img src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_111002500.webp")} alt="" style="justify-self: end;" />
            <img src={assetUrl("/UI/Icon/Imagine/Battle/UI_Icon_120000400.webp")} alt="" />
            <img src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_112001600.webp")} alt="" style="justify-self: end;" />
            <img src={assetUrl("/UI/Icon/Imagine/Battle/UI_Icon_131001200.webp")} alt="" />
            <img src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_113000800.webp")} alt="" style="justify-self: end;" />
            <div></div>
            <img src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_114002300.webp")} alt="" style="justify-self: end;" />
            <div></div>
            <img src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_115002400.webp")} alt="" style="justify-self: end;" />
            
            
        </div>
    </div>
    <dl class="stats p-2 grid gap-1" style="background: var(--bg)">
        <div>
            <dt>Battle Score</dt>
            <dd>4750</dd>
        </div>
        <div>
            <dt>Health</dt>
            <dd>2142</dd>
        </div>
        <div
            class="mb-2"
            style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
        >
            <dt>Stamina</dt>
            <dd>130</dd>
        </div>
        <div>
            <dt>Attack</dt>
            <dd>851</dd>
        </div>
        <div>
            <dt>Crit Rate</dt>
            <dd>9%</dd>
        </div>
        <div
            class="mb-2"
            style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
        >
            <dt>Crit Damage</dt>
            <dd>35%</dd>
        </div>
        <div>
            <dt>Defense</dt>
            <dd>558</dd>
        </div>
        <div>
            <dt>Recovery</dt>
            <dd>617</dd>
        </div>
        <div>
            <dt>Fire Resistance</dt>
            <dd>50</dd>
        </div>
        <div>
            <dt>Thunder Resistance</dt>
            <dd>0</dd>
        </div>
        <div>
            <dt>Ice Resistance</dt>
            <dd>0</dd>
        </div>
        <div>
            <dt>Earth Resistance</dt>
            <dd>0</dd>
        </div>
        <div>
            <dt>Light Resistance</dt>
            <dd>0</dd>
        </div>
        <div
            class="mb-2"
            style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
        >
            <dt>Dark Resistance</dt>
            <dd>0</dd>
        </div>
        <div>
            <dt>Strength</dt>
            <dd>366</dd>
        </div>
        <div>
            <dt>Vitality</dt>
            <dd>302</dd>
        </div>
        <div>
            <dt>Dexterity</dt>
            <dd>251</dd>
        </div>
        <div>
            <dt>Intelligence</dt>
            <dd>283</dd>
        </div>
        <div>
            <dt>Spirit</dt>
            <dd>279</dd>
        </div>
    </dl>
</main>

<style lang="scss">
    main {
        grid-template-columns: 2fr 1fr;
    }

    header {
        grid-column: 1/-1;
    }

    dl > div {
        display: flex;
        justify-content: space-between;
    }
</style>
