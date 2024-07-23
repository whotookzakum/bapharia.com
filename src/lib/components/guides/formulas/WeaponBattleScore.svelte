<script>
    import { math, display } from "mathlifier";
    import RadioSlider from "$lib/components/RadioSlider.svelte";
    import InputNumber from "$lib/components/InputNumber.svelte";
    import StarSelector from "$lib/components/StarSelector.svelte";
    import { assetUrl } from "$lib/utils";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";

    let itemLevel = 80;
    let limitBreakLevel = 5;
    let bsModifier = 1800;
    let specialEffectI = 5;
    let specialEffectII = 5;
    let limitBreakEffect = 5;
    let rarity = "legendary";
    $: rarityCoefficient =
        rarity === "legendary" ? 200 : rarity === "rare" ? 50 : 25;

    let plugs = [
        {
            slot: 1,
            grade: 5,
            type: "stat",
            stars: 5,
        },
        {
            slot: 2,
            grade: 3,
            type: "skill",
            stars: 5,
        },
        {
            slot: 3,
            grade: 2,
            type: "skill",
            stars: 5,
        },
        {
            slot: 4,
            grade: 0,
            type: "skill",
            stars: 5,
        },
    ];

    $: plugs.forEach((plug) => {
        let grade = plug.grade;

        switch (plug.grade) {
            case 0:
                plug.sockets = 0;
                plug.bs = 0;
                return;
            case 4:
                plug.type = "stat";
            case 3:
                // Skill G3 counts as a G5
                if (plug.type === "skill") grade = 5;
            case 1:
            case 2:
                plug.sockets = 1;
                break;
            case 5:
            case 6:
                plug.type = "stat";
                plug.sockets = 2;
                break;
        }

        plug.bs = (5 * plug.stars + (25 * grade - 25)) * plug.sockets;
    });

    $: usedSockets = plugs.reduce((acc, plug) => {
        acc += plug.sockets;
        return acc;
    }, 0);

    $: plugBs = plugs.reduce((acc, plug) => {
        acc += plug.bs;
        return acc;
    }, 0);

    $: total = display(
        `\\text{Weapon Battle Score} = ${
            60 * itemLevel +
            120 * limitBreakLevel +
            bsModifier +
            rarityCoefficient * specialEffectI +
            rarityCoefficient * specialEffectII +
            200 * limitBreakEffect +
            plugBs
        }`,
        { displayMode: true },
    );
</script>

<div
    class="grid gap-2"
    style="font-size: var(--step-0); grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))"
>
    <InputNumber
        prefix="Item Level"
        textAlign="right"
        min={1}
        max={100}
        bind:value={itemLevel}
    />
    <InputNumber
        prefix="Limit Break Level"
        textAlign="right"
        min={1}
        max={5}
        bind:value={limitBreakLevel}
    />
    <InputNumber
        prefix="Battle Score Modifier"
        textAlign="right"
        bind:value={bsModifier}
    />
    <div
        class="flex gap-1 rounded-lg font-semibold items-center"
        style="background: var(--bg); min-height: 44px; padding: 0 0.8rem;"
    >
        <span>Rarity</span>
        <Tooltip placement="top" wrapperStyle="margin-left: auto">
            <label class="grid place-items-center rounded-full">
                <input
                    class="visually-hidden"
                    type="radio"
                    value="normal"
                    bind:group={rarity}
                />
                <img
                    src={assetUrl("/UI/Common/UI_CmnSpecialMain_Rare1.png")}
                    alt="Normal"
                    width="16"
                    height="24"
                />
            </label>
            <svelte:fragment slot="tooltip">Normal</svelte:fragment>
        </Tooltip>
        <Tooltip placement="top">
            <label class="grid place-items-center rounded-full">
                <input
                    class="visually-hidden"
                    type="radio"
                    value="rare"
                    bind:group={rarity}
                />
                <img
                    src={assetUrl("/UI/Common/UI_CmnSpecialMain_Rare2.png")}
                    alt="Rare"
                    width="16"
                    height="24"
                />
            </label>
            <svelte:fragment slot="tooltip">Rare</svelte:fragment>
        </Tooltip>
        <Tooltip placement="top">
            <label class="grid place-items-center rounded-full">
                <input
                    class="visually-hidden"
                    type="radio"
                    value="legendary"
                    bind:group={rarity}
                />
                <img
                    src={assetUrl("/UI/Common/UI_CmnSpecialMain_Rare3.png")}
                    alt="Legendary"
                    width="16"
                    height="24"
                />
            </label>
            <svelte:fragment slot="tooltip">Legendary</svelte:fragment>
        </Tooltip>
    </div>
    <div
        class="flex gap-1 rounded-lg font-semibold items-center"
        style="background: var(--bg); min-height: 44px; padding: 0 0.8rem;"
    >
        <span>Special Effect</span>
        <img
            src={assetUrl("/UI/Common/UI_CmnSpecileMain_Num1.png")}
            alt="I"
            width="16"
            height="20"
        />
        <span>Tier</span>
        <StarSelector bind:value={specialEffectI} class="ml-auto" />
    </div>
    <div
        class="flex gap-1 rounded-lg font-semibold items-center"
        style="background: var(--bg); min-height: 44px; padding: 0 0.8rem;"
    >
        <span>Special Effect</span>
        <img
            src={assetUrl("/UI/Common/UI_CmnSpecileMain_Num2.png")}
            alt="II"
            width="16"
            height="20"
        />
        <span>Tier</span>
        <StarSelector bind:value={specialEffectII} class="ml-auto" />
    </div>
    <div
        class="flex rounded-lg font-semibold items-center"
        style="background: var(--bg); min-height: 44px; padding: 0 0.8rem;"
    >
        Limit Break Effect Tier
        <StarSelector bind:value={limitBreakEffect} class="ml-auto" />
    </div>
</div>

<span class="mini-header w-full" style="margin-block: 0.5rem -0.5rem;"
    >Ability Plugs</span
>
<div
    class="grid gap-2"
    style="font-size: var(--step-0); grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))"
>
    {#each plugs as plug}
        <div class="flex gap-2 items-center" style="font-size: var(--step-0);">
            <select
                bind:value={plug.grade}
                class="px-4 rounded-lg"
                style="background: var(--bg); min-height: 44px; font-weight: 600;"
            >
                <option value={0}>None</option>
                <option value={1}>G1</option>
                <option value={2}>G2</option>
                <option value={3}>G3</option>
                <option value={4}>G4</option>
                <option value={5}>G5</option>
                <option value={6}>G6</option>
            </select>

            {#if plug.grade > 0}
                {#if plug.grade > 3}
                    <RadioSlider
                        bind:group={plug.type}
                        groupName="plugs-{plug.slot}-slider"
                        name="plugsSlider{plug.slot}"
                        data={[{ label: "Stat Plug", value: "stat" }]}
                        style="max-width: 200px; min-height: 44px; flex: 1"
                    />
                {:else}
                    <RadioSlider
                        bind:group={plug.type}
                        groupName="plugs-{plug.slot}-slider"
                        name="plugsSlider{plug.slot}"
                        data={[
                            { label: "Stat Plug", value: "stat" },
                            { label: "Skill Plug", value: "skill" },
                        ]}
                        style="max-width: 200px; min-height: 44px; flex: 1"
                    />
                {/if}

                <StarSelector bind:value={plug.stars} />
            {/if}
        </div>
    {/each}
</div>

{#if usedSockets > 4}
    <span
        class="font-semibold"
        style="color: var(--danger); font-size: var(--step-0)"
        >Maximum socket count exceeded!</span
    >
{/if}

{@html total}

<style lang="scss">
    label {
        min-width: 32px;
        aspect-ratio: 1/1;
    }

    label:has(:hover) {
        background: var(--surface2);
    }

    label:has(:checked) {
        background: var(--surface3);
    }
</style>
