<script>
    import { crossfade, fly } from "svelte/transition";
    import AnimationCancels from "./AnimationCancels.svelte";
    import SkillGrade from "./SkillGrade.svelte";
    import TabSelectors from "./TabSelectors.svelte";
    import animationCancelsData from "./animation-cancels.json";
    import notesData from "./skill-notes.json";
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";

    export let skill = {};

    let selectedTab;

    function getAbilitiesForGrade(skillLevel) {
        return skill.abilities.filter(
            (ability) =>
                ability.condition_skill_id_1 === skill.skill_id &&
                ability.condition_skill_level_1 === skillLevel.level,
        );
    }

    let animationCancels = animationCancelsData[skill.id];
    let notes = notesData[skill.id];

    const TAG_TEXT = {
        Fire: {
            ja_JP: "火属性",
            en_US: "Fire",
        },
        Thunder: {
            ja_JP: "雷属性",
            en_US: "Thunder",
        },
        Ice: {
            ja_JP: "氷属性",
            en_US: "Ice",
        },
        Earth: {
            ja_JP: "土属性",
            en_US: "Earth",
        },
        Light: {
            ja_JP: "光属性",
            en_US: "Light",
        },
        Dark: {
            ja_JP: "闇属性",
            en_US: "Dark",
        },
        None: {
            ja_JP: "無属性",
            en_US: "No Element",
        },
        Attack: {
            ja_JP: "攻撃",
            en_US: "Attack",
        },
        AttackBuf: {
            ja_JP: "攻撃・バフ",
            en_US: "Attack / Buff",
        },
        AttackDebuf: {
            ja_JP: "攻撃・デバフ",
            en_US: "Attack / Debuff",
        },
        AttackHeal: {
            ja_JP: "攻撃・回復",
            en_US: "Attack / Recovery",
        },
        Buf: {
            ja_JP: "バフ",
            en_US: "Buff",
        },
        BufDebuf: {
            ja_JP: "バフ・デバフ",
            en_US: "Buff / Debuff",
        },
        Debuf: {
            ja_JP: "デバフ",
            en_US: "Debuff",
        },
        Heal: {
            ja_JP: "回復",
            en_US: "Recovery",
        },
        HealBuf: {
            ja_JP: "回復・バフ",
            en_US: "Recovery / Buff",
        },
        HealDebuf: {
            ja_JP: "回復・デバフ",
            en_US: "Recovery / Debuff",
        },
    };

    function getTags() {
        let tags = []

        // Add elemental tags
        if (skill.client_data?.ElementType) {
            // tags.push(...skill.client_data.ElementType.split(/(?=[A-Z])/))
        }

        // Add type tags
        if (skill.client_data?.BgType) {
            tags.push(...skill.client_data.BgType.split(/(?=[A-Z])/))
        }

        return tags.filter(tag => tag !== "None")
    }
</script>

<details>
    <summary class="box gap-4">
        <!-- <SkillHeader {skill} /> -->
        <SkillIcon {skill} />
        <span class="flex gap-1" style="flex-direction: column-reverse">
            <span style="font-weight: 600"
                >{skill.name[$userLocale]}</span
            >
            <span class="mini-header">
                {#each getTags() as tag}
                    <span style:color="var(--color-{tag})">{TAG_TEXT[tag][$userLocale]}</span>
                {/each}
            </span>
        </span>
    </summary>
    <TabSelectors bind:selectedTab {notes} {animationCancels} />
    {#if selectedTab === "descriptions"}
        <dl
            class="unstyled-list skill-grade-descriptions"
            style:gap="0"
            role="list"
        >
            {#each skill.skill_levels as skillLevel, index}
                <SkillGrade {skillLevel} abilityType={skill.ability_type} />
                {#if skillLevel.abilities}
                    {#each skillLevel.abilities as ability}
                        {#each ability.ability_levels as abilityLevel}
                            <SkillGrade
                                skillLevel={abilityLevel}
                                abilityType={ability.ability_type}
                            />
                        {/each}
                    {/each}
                {/if}
                {#if index < skill.skill_levels.length - 1}
                    <hr style:margin="0" />
                {/if}
            {/each}
        </dl>
    {:else if animationCancels && selectedTab === "animation-cancels"}
        <AnimationCancels {animationCancels} />
    {:else if notes && selectedTab === "notes"}
        <div>
            <p
                style="padding-top: 0; margin-block: 0.5rem 0; font-size: var(--step-0)"
            >
                {notes}
            </p>
        </div>
    {/if}
</details>

<style lang="scss">
    .skill,
    dl {
        max-inline-size: none;
        line-height: 1.75;
    }

    dl {
        // width: fit-content;
    }

    .mini-header span:not(:last-of-type)::after {
        content: " / ";
        color: var(--surface3);
    }

    summary {
        font-size: var(--step-3);
    }
</style>
