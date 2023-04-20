<script>
    import { userLocale } from "$lib/stores";
    export let text;
</script>

<h4>Source</h4>
<p class="border-left">{text[$userLocale]}</p>