<script>
    import { userLocale } from "$lib/stores";
    export let locations;
</script>

<h4>Found In</h4>
<ul class="border-left" role="list">
    {#each locations as location}
        <li><a href={`/db?result=${location.id}`}>{location.name[$userLocale]}</a></li>
    {/each}
</ul>

<style lang="scss">
    ul {
        list-style-type: none;
        gap: 0;
    }
</style>