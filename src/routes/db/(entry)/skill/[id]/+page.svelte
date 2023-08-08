<script>
    import { userLocale } from "$lib/stores";
    import Skill from "../../../../classes/[classId]/skills/Skill.svelte";
    export let data;

</script>

<h2>Skill Description</h2>
<Skill skill={data} />

<!-- Skill Video -->

<style lang="scss">
    .skill,
    dl {
        max-inline-size: none;
    }

    dl {
        margin-top: 1rem;
    }

    @media (min-width: 900px) {
        dl {
            padding-inline: 1rem;
        }
    }
</style>