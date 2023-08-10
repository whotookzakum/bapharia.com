<script>
    import { userLocale } from "$lib/stores";
    import Skill from "../../../../classes/[classId]/skills/Skill.svelte";
    export let data;

</script>

<h2>Skill Description</h2>
<Skill skill={data} />

<!-- Skill Video -->