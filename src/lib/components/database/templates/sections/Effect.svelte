<script>
    import { userLocale } from "$lib/stores";
    export let text;
</script>

<h4>Effect</h4>
<p>{text[$userLocale]}</p>