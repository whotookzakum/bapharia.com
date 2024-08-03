<script>
    import Icon from "@iconify/svelte";
    import { assetUrl } from "$lib/utils";

    export let value = 0; // the checked star
    export let xButton = false;
    export let max = 5;
    let hoveredStar = 0;
</script>

<div class="flex items-center stars {$$restProps.class}">
    {#if xButton}
        <label
            class="star-wrapper text3"
            style="margin: 0"
            class:hover-accent1={value > 0}
            on:focus={() => (hoveredStar = 0)}
            on:mouseover={() => (hoveredStar = 0)}
        >
            <input
                type="radio"
                class="visually-hidden"
                value={0}
                bind:group={value}
                on:change={() => (value = 0)}
            />
            <span class="visually-hidden">0</span>
            <Icon icon="ic:baseline-close" style="display: flex;" />
        </label>
    {/if}
    {#each Array.from({ length: max }, (_, i) => i + 1) as star}
        <label
            class="star-wrapper"
            on:focus={() => (hoveredStar = star)}
            on:mouseover={() => (hoveredStar = star)}
            on:mouseleave={() => (hoveredStar = 0)}
            class:lit={hoveredStar >= star}
            class:glow={value >= star}
            style:background-image={assetUrl(
                "/UI/TelopManager/UI_TelopManager_Star_Glow.png",
            )}
        >
            <input
                type="radio"
                class="visually-hidden"
                value={star}
                bind:group={value}
                on:change={() => (value = star)}
            />
            <span class="visually-hidden">{star}</span>
            <img
                class="star-yellow"
                src={assetUrl("/UI/TelopManager/UI_TelopManager_Star_1.png")}
                alt=""
                width="24"
                height="24"
            />
            <img
                class="star-black"
                src={assetUrl("/UI/TelopManager/UI_TelopManager_Star_0.png")}
                alt=""
                width="24"
                height="24"
            />
        </label>
    {/each}
</div>

<style lang="scss">
    .star-wrapper {
        position: relative;
        background-position: 50% 50%;
        background-size: 48px 48px;
        background-repeat: no-repeat;
        padding: 4px;
        margin: -4px;

        .star-yellow {
            opacity: 0;
            position: absolute;
        }
    }

    // Glow applies to the selected level and lower
    .glow .star-yellow {
        opacity: 1;
    }

    // Lit applies to the hovered level and lower
    .stars:where(:hover, :has(:focus-visible)) {
        .star-yellow {
            opacity: 0;
        }

        .lit .star-yellow {
            opacity: 1;
        }
    }
</style>
