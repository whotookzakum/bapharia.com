<script>
    export let posterImg, modelSrc;
    let modelViewer;
    function handleClick() {
        modelViewer.dismissPoster();
    }
</script>

<svelte:head>
    <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
</svelte:head>

<model-viewer
    id="model-viewer"
    bind:this={modelViewer}
    class="box"
    alt=""
    src={modelSrc}
    ar
    reveal="manual"
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
>
    <div id="poster-content" slot="poster">
        <div
            id="lazy-load-poster"
            slot="poster"
            style={`background-image: url(${posterImg})`}
        />
        <button
            id="button-load"
            slot="poster"
            on:click={handleClick}>View 3D Model</button
        >
    </div>
</model-viewer>

<style lang="scss">
    #model-viewer {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        background: var(--surface2);
        border-color: var(--surface3);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        padding: 0;
    }

    #poster-content {
        display: grid;
        place-items: flex-end flex-start;
        padding: 1rem;
        height: 100%;
        position: relative;
    }

    #lazy-load-poster {
        position: absolute;
        inset: 0;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    #button-load {
        z-index: 100;
        border-radius: 5px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        padding: 0.5rem 1rem;
        border: none;
        background-color: var(--accent);
        color: hsl(209, 0%, 94%);
        font-weight: 600;
        transition: transform 0.1s ease, background-color 0.3s ease;
        
        &:hover, 
        &:focus-visible {
            filter: brightness(0.9);
        }

        &:hover, 
        &:focus-visible {
            background: #da0442;
        }

        &:active {
            filter: brightness(0.8);
            transform: translateY(2px);
        }
    }
</style>