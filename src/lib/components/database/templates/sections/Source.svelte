<script>
    import { userLocale } from "$lib/stores";
    export let text;
</script>

<h4>Source</h4>
<p>{text[$userLocale]}</p>