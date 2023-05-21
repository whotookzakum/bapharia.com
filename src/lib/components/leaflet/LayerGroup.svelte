<script>
    import {
        createEventDispatcher,
        getContext,
        onDestroy,
        setContext,
    } from "svelte";
    import L from "leaflet?client";

    import EventBridge from "svelte-leafletjs?client";

    const { getMap } = getContext(L);

    export let options = {};
    export let events = [];

    let layerGroup;

    // setContext(L.LayerGroup, {
    //     getLayerGroup: () => layerGroup,
    // });

    setContext(L, {
        getMap: () => layerGroup,
    });

    const dispatch = createEventDispatcher();
    let eventBridge;

    $: {
        if (!layerGroup) {
            layerGroup = L.layerGroup([], options).addTo(getMap());
            // eventBridge = new EventBridge(layerGroup, dispatch, events);
        }
    }

    onDestroy(() => {
        eventBridge.unregister();
        layerGroup.removeFrom(getMap());
    });

    export function getLayerGroup() {
        return layerGroup;
    }
</script>

<div>
    {#if layerGroup}
        <slot />
    {/if}
</div>
