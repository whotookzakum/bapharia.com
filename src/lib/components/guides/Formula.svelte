<script>
    import { math, display } from "mathlifier";
    import RadioSlider from "$lib/components/RadioSlider.svelte";
    import WeaponBattleScore from "./formulas/WeaponBattleScore.svelte";
    import EleResistChart from "./formulas/EleResistChart.svelte";

    export let formula = "";
    export let tabs = [];
    export let inline = false;
    export let name = "";
    export let footnote = "";

    let viewMode = tabs[0]?.value;

    const components = {
        WeaponBattleScore,
        EleResistChart,
    };
</script>

<svelte:element
    this={inline ? "span" : "div"}
    class={inline ? "" : "rounded-2xl surface1 p-4 my-4 grid gap-4"}
    {...$$restProps}
>
    {#if tabs.length > 1}
        <RadioSlider
            bind:group={viewMode}
            groupName={name}
            {name}
            data={tabs}
            style="max-width: var(--slider-max-width, 200px)"
        />

        {#each tabs as tab}
            {#if viewMode === tab.value}
                {#if tab.component}
                    <svelte:component this={components[tab.component]} />
                {:else if inline}
                    {@html math(tab.ormula)}
                {:else}
                    {@html display(tab.formula, { displayMode: true })}
                {/if}

                {#if tab.footnote}
                    <p
                        class="accent1"
                        style="font-size: var(--step--1); margin-block: 1rem 0; line-height: 1.4; max-inline-size: none;"
                    >
                        {@html tab.footnote}
                    </p>
                {/if}
            {/if}
        {/each}
    {:else if inline}
        {@html math(formula)}
    {:else}
        {@html display(formula, { displayMode: true })}
    {/if}

    {#if footnote}
        <p
            class="accent1"
            style="font-size: var(--step--1); margin-block: 1rem 0; line-height: 1.4; max-inline-size: none;"
        >
            {@html footnote}
        </p>
    {/if}
</svelte:element>
