<script>
    import InputNumber from "$lib/components/InputNumber.svelte";
    import Icon from "@iconify/svelte";
    import { allStats } from "./stores";
    export let maxAxisValue;
    export let selectedIndexAxis;
    export let changeAxis;
    export let showTrueValue;
    let checked;
</script>

<div class="settings-wrapper">
    <input
        class="visually-hidden"
        type="checkbox"
        id="toggle-input"
        bind:checked
    />
    <label class="toggle grid" for="toggle-input">
        <Icon icon={checked ? "ph:x-bold" : "mdi:settings"} width="20" height="20" />
        <span class="visually-hidden">Show/hide settings</span>
    </label>
    <div class="settings box grid" style="gap: 1rem">
        <span>Chart Settings</span>
        <div>
            <span class="component-label">Maximum Axis Value</span>
            <InputNumber
                description="Maximum Axis Value"
                prefix="Max"
                bind:value={maxAxisValue}
                max={4000}
                min={0}
                step={100}
                invalid={maxAxisValue > 4000 || maxAxisValue < 0}
                describedby="axis-scale-description"
            />
            <span class="footnote" id="axis-scale-description"
                >Setting this to 0 will automatically scale the value axis.</span
            >
        </div>
        <div>
            <span class="component-label">Axis</span>
            <div class="flex g-50">
                <label>
                    <input
                        type="radio"
                        bind:group={selectedIndexAxis}
                        value="x"
                        on:input={(e) => changeAxis(e)}
                    /> X
                </label>
                <label>
                    <input
                        type="radio"
                        bind:group={selectedIndexAxis}
                        value="y"
                        on:input={(e) => changeAxis(e)}
                    /> Y
                </label>
            </div>
        </div>
        <div>
            <span class="component-label">Stats</span>
            <div class="grid g-25" style="grid-template-columns: 1fr 1fr;">
                {#each $allStats as stat}
                    <label>
                        <input type="checkbox" bind:checked={stat.checked} />
                        {stat.label}
                    </label>
                {/each}
            </div>
        </div>
        <div>
            <span class="component-label">Dataset</span>
            <label>
                <input type="checkbox" name="" id="" bind:checked={showTrueValue}> Show True Values
            </label>
            <span class="footnote">True Values include ATK gains from STR/INT, Crit Rate gains from DEX/MND, etc. If disabled, only Base Values will be shown.</span>
        </div>
    </div>
</div>

<style lang="scss">
    .settings-wrapper {
        position: absolute;
        right: 0;
        max-width: 280px;
    }

    .settings {
        display: none;
        background: var(--surface2);
        border-radius: 5px;
    }

    .component-label {
        display: block;
    }

    .footnote {
        display: block;
        font-size: var(--step--1);
        color: var(--accent);
        margin-top: 0.5rem;
        line-height: 1.4;
    }

    .toggle {
        position: absolute !important;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        place-content: center;
        color: var(--text2);
        position: relative;
        z-index: 1;
        border-radius: 5px;
    }

    #toggle-input:focus-visible + .toggle,
    .toggle:hover {
        background: var(--surface2);
        color: var(--accent);
    }

    #toggle-input:focus-visible + .toggle {
        outline: 2px solid var(--accent);
    }

    #toggle-input:checked {
        & + .toggle {
            color: var(--accent);
        }

        & ~ .settings {
            display: grid;
        }
    }
</style>
