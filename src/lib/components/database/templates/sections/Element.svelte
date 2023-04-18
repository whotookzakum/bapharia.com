<script>
    export let imgSrc = "";
    export let value = null;
</script>

<h4>Element</h4>
<div>
    Element: <img src={imgSrc} alt="" width="32" height="32" />
    {#if value}
        {value}
    {/if}
</div>