<script>
    import ItemStats from "./ItemStats.svelte";
    export let item;
    // If levels aren't fixed, add level slider and pass the corresponding level to ItemStats
</script>

<h1>{item.locale.ja_JP.name}</h1>
<div>
    <ItemStats {item} />
</div>