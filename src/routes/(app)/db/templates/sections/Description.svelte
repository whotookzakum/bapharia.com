<script>
    import { userLocale } from "$lib/stores";
    export let text;
</script>

<h4>Description</h4>
<p>{text[$userLocale]}</p>