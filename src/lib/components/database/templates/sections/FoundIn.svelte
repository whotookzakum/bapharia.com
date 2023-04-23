<script>
    import { userLocale } from "$lib/stores";
    export let locations;
</script>

<h4>Found In</h4>
<ul class="border-left">
    {#each locations as location}
        <li><a href={`?result=${location.id}#db`}>{location.name[$userLocale]}</a></li>
    {/each}
</ul>

<style lang="scss">
    ul {
        list-style: none;
        gap: 0;
    }
</style>