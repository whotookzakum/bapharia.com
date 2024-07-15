<script>
    import RangeSlider from "svelte-range-slider-pips";

    let searchCategory = "all";
    let level = [0, 100];
</script>

<div
    class="surface1 rounded-2xl p-4 grid gap-2 w-full"
    style="max-width: 1200px; margin-inline: auto;"
>
    <div class="flex gap-4">
        <label
            class="mini-header select-none"
            class:active={searchCategory === "all"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="all"
                bind:group={searchCategory}
            />
            All
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "weapons"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="weapons"
                bind:group={searchCategory}
            />
            Weapons
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "bImagine"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="bImagine"
                bind:group={searchCategory}
            />
            Battle Imagine
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "eImagine"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="eImagine"
                bind:group={searchCategory}
            />
            Enhance Imagine
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "skills"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="skills"
                bind:group={searchCategory}
            />
            Skills
        </label>
    </div>
    <div class="fle gap-4">
        <input type="text" placeholder="Search" />
        <span>level</span>
        <span>ability</span>
        <span>rarity</span>
        <span>element</span>
        <span></span>
        <RangeSlider
            bind:values={level}
            min={0}
            max={100}
            step={1}
            range
            pushy
            float
            pips
            pipstep={100 / 10}
            first="label"
            last="label"
        />
    </div>
</div>

<div class="w-full mt-8" style="max-width: 1200px; margin-inline: auto;">
    <!-- <span class="mini-header">Class</span>
    <ul class="flex surface1 rounded-2xl p-4" style="grid-column: 1;">
        <li>
            <img
                src="/UI/Icon/Class/UI_IconClass_12.png"
                alt=""
                width="64"
                height="64"
            />
        </li>
        <li>
            <img
                src="/UI/Icon/Class/UI_IconClass_06.png"
                alt=""
                width="64"
                height="64"
            />
        </li>
        <li>
            <img
                src="/UI/Icon/Class/UI_IconClass_20.png"
                alt=""
                width="64"
                height="64"
            />
        </li>
        <li>
            <img
                src="/UI/Icon/Class/UI_IconClass_19.png"
                alt=""
                width="64"
                height="64"
            />
        </li>
        <li>
            <img
                src="/UI/Icon/Class/UI_IconClass_11.png"
                alt=""
                width="64"
                height="64"
            />
        </li>
        <li>
            <img
                src="/UI/Icon/Class/UI_IconClass_07.png"
                alt=""
                width="64"
                height="64"
            />
        </li>
    </ul> -->
    <div class="flex gap-4 items-start">
        <div class="flex-1 grid gap-4">
            <div class="surface1 rounded-2xl p-4 grid gap-2">
                <div>
                    <img src="/UI/Icon/Weapon/UI_Icon_106001201.png" alt="" />
                    <span class="">Pyroclastic Bow</span>
                    <span class="mini-header">Battle Score: 780</span>
                </div>
            </div>
            <div class="surface1 rounded-2xl p-4 grid gap-2 content-start">
                <img
                    src="/UI/Icon/Imagine/Battle/UI_Icon_120000400.png"
                    alt=""
                />
                <img
                    src="/UI/Icon/Imagine/Battle/UI_Icon_131001200.png"
                    alt=""
                />
            </div>
        </div>
        <div class="flex-1 surface1 rounded-2xl p-4 grid gap-2">
            <img src="/UI/Icon/Imagine/Picture/UI_Icon_111002500.png" alt="" />
            <img src="/UI/Icon/Imagine/Picture/UI_Icon_112001600.png" alt="" />
            <img src="/UI/Icon/Imagine/Picture/UI_Icon_113000800.png" alt="" />
            <img src="/UI/Icon/Imagine/Picture/UI_Icon_114002300.png" alt="" />
            <img src="/UI/Icon/Imagine/Picture/UI_Icon_115002400.png" alt="" />
        </div>
    </div>
</div>

<span class="mini-header mt-4">Stats</span>
<div class="surface1 rounded-2xl p-4" style="grid-column: 1">
    <dl>
        <div
            class="mb-2"
            style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
        >
            <dt>Battle Score</dt>
            <dd>16575</dd>
        </div>
        <div>
            <dt>Health</dt>
            <dd>4873</dd>
        </div>
        <div
            class="mb-2"
            style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
        >
            <dt>Stamina</dt>
            <dd>145</dd>
        </div>
        <div>
            <dt>Attack</dt>
            <dd>5423</dd>
        </div>
        <div>
            <dt>Crit Rate</dt>
            <dd>18%</dd>
        </div>
        <div>
            <dt>Crit Damage</dt>
            <dd>51%</dd>
        </div>
        <div>
            <dt>Strength</dt>
            <dd>590</dd>
        </div>
        <div>
            <dt>Vitality</dt>
            <dd>437</dd>
        </div>
        <div>
            <dt>Dexterity</dt>
            <dd>542</dd>
        </div>
        <div>
            <dt>Intelligence</dt>
            <dd>378</dd>
        </div>
        <div
            class="mb-2"
            style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
        >
            <dt>Spirit</dt>
            <dd>489</dd>
        </div>
        <div>
            <dt>Defense</dt>
            <dd>1108</dd>
        </div>
        <div>
            <dt>Recovery</dt>
            <dd>1227</dd>
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
        <div>
            <dt>Dark Resistance</dt>
            <dd>0</dd>
        </div>
    </dl>
</div>

<style>
    dl > div {
        display: flex;
        justify-content: space-between;
    }
</style>
