<script>
    import { math, display } from "mathlifier";
    import RadioSlider from "$lib/components/RadioSlider.svelte";
    import WeaponBattleScore from "./formulas/WeaponBattleScore.svelte";

    export let formula = "";
    export let demo = "";
    export let viewMode = "formula";
    export let inline = false;

    const components = {
        WeaponBattleScore,
    };
</script>

<svelte:element
    this={inline ? "span" : "div"}
    class={inline ? "" : "rounded-2xl surface1 p-4 my-4 grid gap-4"}
    {...$$restProps}
>
    {#if demo}
        <RadioSlider
            bind:group={viewMode}
            groupName="formula-slider"
            name="formulaSlider"
            data={[
                { label: "Formula", value: "formula" },
                { label: "Try it", value: "try-it" },
            ]}
            style="max-width: 200px"
        />
    {/if}

    {#if viewMode === "try-it"}
        <svelte:component this={components[demo]} />
    {:else if inline}
        {@html math(formula)}
    {:else}
        {@html display(formula, { displayMode: true })}
    {/if}
</svelte:element>
