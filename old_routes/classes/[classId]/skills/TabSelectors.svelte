<script>
    import Icon from "@iconify/svelte";
    export let selectedTab = "descriptions";
    export let notes = false;
    export let animationCancels = false;
</script>

<div class="tabs-wrapper flex">
    <label>
        <input
            class="visually-hidden"
            type="radio"
            value="descriptions"
            bind:group={selectedTab}
        />
        <span
            class="tab-text flex gap-2"
            style="--tab-color: hsla(273, 80%, 60%, 1)"
        >
            <Icon
                icon="ic:outline-description"
                width="20"
                height="20"
                color="var(--tab-color)"
            />
            Description
        </span>
    </label>

    {#if animationCancels}
        <label>
            <input
                class="visually-hidden"
                type="radio"
                value="animation-cancels"
                bind:group={selectedTab}
            />
            <span class="tab-text flex gap-2" style="--tab-color: goldenrod">
                <Icon
                    icon="mdi:chart-timeline-variant-shimmer"
                    width="20"
                    height="20"
                    color="var(--tab-color)"
                />
                Animation Cancels
            </span>
        </label>
    {/if}

    {#if notes}
        <label>
            <input
                class="visually-hidden"
                type="radio"
                value="notes"
                bind:group={selectedTab}
            />
            <span class="tab-text flex gap-2" style="--tab-color: var(--accent1)">
                <Icon
                    icon="heroicons:exclamation-circle-20-solid"
                    width="20"
                    height="20"
                    color="var(--tab-color)"
                />
                Notes
            </span>
        </label>
    {/if}
</div>

<style lang="scss">
    .tabs-wrapper {
        margin: 0.5rem 0;
        font-size: var(--step--1);
        border-bottom: 1px solid var(--surface3);
        flex-wrap: wrap;
    }

    .flex {
        align-items: center;
    }

    .tab-text {
        background: var(--surface1);
        background: none;
        padding: 0.5rem 1rem 0.5rem 0.85rem;
    }

    .tab-text {
        font-weight: 600;
        border-bottom: 4px solid transparent;
        transition: border-color 0.3s ease;
    }

    .tab-text:hover,
    input:focus-visible + .tab-text {
        color: var(--text1) !important;
    }

    input:focus-visible + .tab-text {
        
    }

    input:checked + .tab-text {
        border-color: var(--tab-color);
    }

    input:not(:checked) + .tab-text {
        color: var(--text2);
    }

    @media (max-width: 470px) {
        .tabs-wrapper {
            gap: 0.5rem;
            border-bottom: none;
        }

        .tab-text {
            width: fit-content;
            background: var(--surface1);
            border-radius: 1rem;
            border: 2px solid transparent;
        }

        input:checked + .tab-text {
            border: 2px solid var(--tab-color);
            background: var(--surface2);
        }
    }
</style>
