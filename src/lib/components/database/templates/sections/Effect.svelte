<script>
    import { userLocale } from "$lib/stores";
    export let text;
</script>

<h4>Effect</h4>
<p class="border-left">{text[$userLocale]}</p>