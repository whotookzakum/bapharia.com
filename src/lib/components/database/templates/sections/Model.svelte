<script>
    import ModelViewer from "$lib/components/ModelViewer.svelte";
    export let modelSrc = "";
    export let posterImg = "";
</script>

<h4>Model</h4>
<ModelViewer {modelSrc} {posterImg} />