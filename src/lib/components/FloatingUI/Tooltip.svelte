<script>
    import {
        computePosition,
        flip,
        shift,
        offset as offsetMiddleware,
        arrow as arrowMiddleware,
        autoUpdate,
        autoPlacement,
    } from "@floating-ui/dom";
    import { onDestroy, onMount } from "svelte";
    import _ from "lodash";

    // Displays tooltip slot if provided, else displays aria-label value.
    // Uses CSS to toggle tooltip visibility instead of creating and removing DOM nodes.
 
    // TODO: role="tooltip" or "popover" + "popovertarget"?

    export let inline = false;
    export let show = false;
    export let animateIn = true;
    export let animateOut = true;
    export let reverseAnimation = false;
    export let arrow = false;
    export let offset = 8;
    export let delay = 0; // 200~400 is good
    export let hide = false;
    export let placement = "bottom";

    let targetElement,
        tooltipElement,
        arrowElement,
        tooltipId,
        targetElementName,
        animationClass;
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
            if (!targetElementName)
                targetElementName = targetElement.getAttribute("alt");
        }
    };

    function update() {
        autoUpdate(targetElement, tooltipElement, () =>
            computePosition(targetElement, tooltipElement, {
                // Either use placement + flip(), or only autoPlacement().
                placement,
                // strategy: "absolute" or "fixed",
                middleware: [
                    offsetMiddleware(offset),
                    flip(),
                    // autoPlacement({
                    //     padding: 32
                    // }),
                    shift({ padding: 16 }),
                    arrowMiddleware({ element: arrowElement }),
                ],
            }).then(({ x, y, placement, middlewareData }) => {
                Object.assign(tooltipElement.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });

                // Add animation css class
                if (reverseAnimation) {
                    if (placement === "top") animationClass = "bottom"
                    else if (placement === "bottom") animationClass = "top"
                    else if (placement === "left") animationClass = "right"
                    else if (placement === "right") animationClass = "left"
                }
                else {
                    animationClass = placement;
                }

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
            }),
        );
    }

    onMount(() => {
        update();

        const showTooltip = _.debounce(() => {
            if (!hide) show = true;
        }, delay);

        const hideTooltip = () => {
            showTooltip.cancel();
            show = false;
        };

        targetElement.addEventListener("mouseenter", showTooltip);
        targetElement.addEventListener("mouseleave", hideTooltip);
        targetElement.addEventListener("focus", () => (show = true));
        targetElement.addEventListener("blur", hideTooltip);
        targetElement.addEventListener("focusin", () => (show = true));
        targetElement.addEventListener("focusout", hideTooltip);
        targetElement.addEventListener("click", hideTooltip);
    });

    onDestroy(() => {
        if (targetElement) update();
    });
</script>

<svelte:element
    this={wrapperElementTag}
    class="float-wrapper"
    class:show
    use:floatWrapper
>
    <slot {show} />
    <svelte:element
        this={wrapperElementTag}
        id={tooltipId}
        role="tooltip"
        bind:this={tooltipElement}
        aria-hidden={!$$slots.tooltip}
        class="tooltip {animationClass}"
        class:animate-in={animateIn}
        class:animate-out={animateOut}
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

    // :global(.float-wrapper:not(.delay) *:where(:hover, :focus-visible, :has(:focus-visible)) ~ .tooltip),
    .show .tooltip {
        visibility: visible !important;
        opacity: 1 !important;
        translate: unset !important;
    }

    .tooltip {
        --tooltip-bg: rgba(0, 0, 0, 1);
        width: fit-content;
        position: absolute;
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
    }

    :global(.tooltip *) {
        margin: 0;
        line-height: inherit;
    }

    // Animations
    :not(.show) .animate-out {
        transition: all 0.2s ease;
    }

    .show .animate-in {
        transition: all 0.2s ease;
    }

    .animate-in,
    .animate-out {

        // Slides up to down
        &.top {
            translate: 0 -0.25rem;
        }

        // Slides right to left
        &.right {
            translate: 0.25rem 0;
        }

        // Slides down to up
        &.bottom {
            translate: 0 0.25rem;
        }

        // Slides left to right
        &.left {
            translate: -0.25rem 0;
        }
    }
</style>
