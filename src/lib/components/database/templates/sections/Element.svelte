<script>
    export let imgSrc = "";
</script>

<h4>Element</h4>
<div class="border-left flex g-50">
    <img src={imgSrc} alt="" width="32" height="32" />
    <p>Fire</p>
</div>

<style lang="scss">
    .border-left {
        margin: 0.25rem 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
        align-items: center;
    }
</style>