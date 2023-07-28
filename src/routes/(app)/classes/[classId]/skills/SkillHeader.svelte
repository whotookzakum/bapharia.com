<script>
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";

    export let skill = {};
</script>

<header class="flex box" style="width: fit-conten">
    <div class="one flex g-50">
        <SkillIcon
            skillType={skill.skill_type}
            skillIcon={skill.thumb}
            elementImg={skill.elementImg}
            skillBackgroundImg={skill.skillBackgroundImg}
        />
        <div>
            <h3 class="toc-exclude">
                {skill.name[$userLocale]}
            </h3>
            <div>
                {skill.element || "Fire"} • {skill.type || "Attack / Buff"}
            </div>
        </div>
    </div>
    <div class="two">
        <b>Cooldown</b>
        <div>20s</div>
    </div>
    <div class="three">
        <b>Buffs & Debuffs</b>
        <div>Super Armor</div>
    </div>
</header>

<style lang="scss">
    header {
        flex-wrap: wrap;
        gap: 1rem 2rem;
        align-items: center;
        grid-template-columns: minmax(30ch, 1fr) minmax(30ch, 1fr) minmax(30ch, 1fr);
    }

    .one {
        align-items: center;
        flex: 0 1 30ch;
        gap: 1rem;
    }

    .two {
        flex: 1 1 10ch;
    }

    .three {
        flex: 1 1 15ch;
    }

    h3 {
        margin: 0;
        line-height: 1.4;
        font-size: clamp(1.2rem, calc(0.74rem + 0.80vw), 1.4rem);
    }
</style>
