<svelte:head>
    <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
</svelte:head>

<model-viewer
    id="model-viewer"
    class="box"
    alt=""
    src={`/SK_CH_E000_00.gltf`}
    ar
    loading="eager"
    reveal="auto"
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
/>

<style lang="scss">
    #model-viewer {
        background: black;
        width: 100%;
        height: 300px;
        padding: 0;
        box-sizing: content-box;
    }
</style>