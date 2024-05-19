<script>
    import {
        computePosition,
        flip,
        shift,
        offset as offsetMiddleware,
        arrow as arrowMiddleware,
    } from "@floating-ui/dom";
    import { onMount } from "svelte";
    import _ from "lodash";

    // Display tooltip slot if provided, else display aria-label value.

    export let inline = false;
    export let show = false; // if delay is specified, will hide after blur or hover out; if no delay then will permanently be open
    export let animate = true;
    export let arrow = false;
    export let offset = 8;
    export let delay = false;

    let targetElement,
        tooltipElement,
        arrowElement,
        tooltipId,
        targetElementName;
    let wrapperElementTag = inline ? "span" : "div";

    const floatWrapper = (wrapper) => {
        targetElement = wrapper.firstChild;
        tooltipId =
            "tooltip" +
            wrapper.classList[wrapper.classList.length - 1]
                .replace("s-", "")
                .toUpperCase();

        if ($$slots.tooltip) {
            targetElement.setAttribute("aria-describedby", tooltipId);
        } else {
            targetElementName = targetElement.getAttribute("aria-label");
        }
    };

    function update() {
        computePosition(targetElement, tooltipElement, {
            placement: "top",
            middleware: [
                offsetMiddleware(offset),
                flip(),
                shift({ padding: 16 }),
                arrowMiddleware({ element: arrowElement }),
            ],
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(tooltipElement.style, {
                left: `${x}px`,
                top: `${y}px`,
            });

            if (arrow) {
                const { x: arrowX, y: arrowY } = middlewareData.arrow;

                const staticSide = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right",
                }[placement.split("-")[0]];

                Object.assign(arrowElement.style, {
                    left: arrowX != null ? `${arrowX}px` : "",
                    top: arrowY != null ? `${arrowY}px` : "",
                    right: "",
                    bottom: "",
                    [staticSide]: "-4px",
                });
            }
        });
    }

    onMount(() => {
        update();

        if (delay) {
            const ms = typeof delay === "number" ? delay : 400 // default 200~400 is good
            const showTooltip = _.debounce(() => (show = true), ms);
            const hideTooltip = () => {
                showTooltip.cancel();
                show = false;
            }

            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
            targetElement.addEventListener("focus", showTooltip);
            targetElement.addEventListener("focusin", showTooltip);
            targetElement.addEventListener("blur", hideTooltip);
            targetElement.addEventListener("click", hideTooltip);
        }
    });
</script>

<svelte:element
    this={wrapperElementTag}
    class="float-wrapper"
    class:show
    class:delay
    use:floatWrapper
>
    <slot />
    <svelte:element
        this={wrapperElementTag}
        id={tooltipId}
        role="tooltip"
        class="tooltip"
        class:animate
        bind:this={tooltipElement}
    >
        <slot name="tooltip">
            {targetElementName}
        </slot>
        {#if arrow}
            <span class="arrow" bind:this={arrowElement} />
        {/if}
    </svelte:element>
</svelte:element>

<style lang="scss">
    div.float-wrapper {
        position: relative;
    }

    :global(.float-wrapper:not(.delay) *:where(:hover, :focus-visible, :focus-within) ~ .tooltip),
    .show .tooltip {
        visibility: visible !important;
        opacity: 1 !important;
        translate: unset !important;
    }

    .tooltip {
        --tooltip-bg: rgba(0, 0, 0, 1);
        width: fit-content;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        background: var(--tooltip-bg);
        padding: 0.5rem 0.75rem; // 0.4rem 0.65rem, 0.5rem 0.75rem, 0.5rem 1rem
        border-radius: 0.5rem;
        font-size: var(--step--1);
        color: var(--text1-light);
        font-weight: 500;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
        backdrop-filter: blur(5px);
        max-inline-size: 40ch;
        line-height: 1.3;
        margin: 0;
        z-index: 4;

        .arrow {
            position: absolute;
            background: var(--tooltip-bg);
            width: 8px;
            height: 8px;
            transform: rotate(45deg);
        }

        &.animate {
            translate: 0 0.25rem;
            transition: all 0.2s ease;
        }
    }

    :global(.tooltip *) {
        margin: 0;
        line-height: inherit;
    }
</style>
