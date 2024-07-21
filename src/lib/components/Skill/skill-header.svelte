<script>
    import TYPES_TEXT from "$api/utils/categories";
    import { userLocale } from "$lib/stores"
    import Icon from "./skill-icon.svelte";

    export let skill;

    function getTags() {
        let tags = [];

        skill.text.element?.split(/(?=[A-Z])/).forEach((substr) => {
            const id = eleStringIdToId[substr];
            if (substr !== "None")
                tags.push({
                    idString: id, // Change "Fire", "Thunder" etc. to 1, 2, etc.
                    text: TYPES_TEXT[$userLocale].Element[id],
                });
        });

        skill.text.type?.split(/(?=[A-Z])/).forEach((substr) => {
            if (substr !== "None")
                tags.push({
                    idString: substr,
                    text: TYPES_TEXT[$userLocale].SkillType[substr],
                });
        });

        return tags.filter((tag) => tag !== "None");
    }

    const eleStringIdToId = {
        Fire: 1,
        Thunder: 2,
        Ice: 3,
        Earth: 4,
        Light: 5,
        Dark: 6,
    };
</script>

<Icon {skill} />
<span class="flex flex-col-reverse">
    <span style="font-weight: 600"
        >{skill.text.name}
        <sup class="mini-header">#{skill.skill_id}</sup></span
    >
    <span class="mini-header">
        {#each getTags() as { idString, text }}
            <span
                style:color="var(--color-{idString}, var(--element{idString}))"
                >{text}</span
            >
        {/each}
        {#if skill.ability_type === 100}
            <span style="color: var(--accent2);">Shareable</span>
        {/if}
    </span>
</span>

<style lang="scss">
    .mini-header span:not(:last-of-type)::after {
        content: " / ";
        color: var(--surface3);
    }
</style>