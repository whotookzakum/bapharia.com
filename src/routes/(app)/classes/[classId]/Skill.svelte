<script>
    import SkillIcon from "./SkillIcon.svelte";
    export let skill = {};
</script>

<li class="skill box grid g-50">
    <header class="flex g-50" style:align-items="center">
        <SkillIcon
            skillType="A_B"
            classType={19}
            skillCategory={5}
            skillId={1912}
            elementId={1}
        />
        <div>
            <h3 class="toc-exclude" style:margin="0">{skill.name}</h3>
            <span>{skill.element} • {skill.type}</span>
        </div>
    </header>
    <hr />
    <section>
        <span class="component-label"
            >G1 <img
                src="/UI/SkillTree/UI_SkiList_IconType00.png"
                alt="n"
                width="18"
                height="18"
            />
            (Level {skill.G1.levelReq})</span
        >
        <p>{skill.G1.desc}</p>
    </section>
    <hr />
    <section>
        <span class="component-label"
            >G2 <img
                src="/UI/SkillTree/UI_SkiList_IconType00.png"
                alt="n"
                width="18"
                height="18"
            />
            (Level {skill.G2.levelReq})</span
        >
        <p>{skill.G2.desc}</p>
    </section>
    <hr />
    <section>
        <span class="component-label"
            >G3 <img
                src="/UI/SkillTree/UI_SkiList_IconType00.png"
                alt="n"
                width="18"
                height="18"
            />
            (Level {skill.G3.levelReq})</span
        >
        <p>{skill.G3.desc}</p>
    </section>
    <div
        class="box"
        style:background="var(--surface3)"
        style:margin-top="0.5rem"
    >
        <section>
            <span class="component-label"
                >G3 <img
                    src="/UI/SkillTree/UI_SkiList_IconType01.png"
                    alt="α"
                    width="18"
                    height="18"
                />
                (Level {skill.G3.alpha.levelReq})</span
            >
            <p>{skill.G3.alpha.desc}</p>
        </section>
        <hr style:background="rgba(128, 128, 255, 0.1)" />
        <section>
            <span class="component-label"
                >G3 <img
                    src="/UI/SkillTree/UI_SkiList_IconType02.png"
                    alt="β"
                    width="18"
                    height="18"
                />
                (Level {skill.G3.beta.levelReq})</span
            >
            <p>{skill.G3.beta.desc}</p>
        </section>
    </div>
</li>

<style lang="scss">
    .skill > hr {
        margin: 0;
    }

    .skill {
        background: var(--surface2);

        .component-label {
            margin: 0;
            text-transform: none;

            img {
                vertical-align: middle;
            }
        }

        section p {
            margin: 0;
            font-size: var(--step-0);
            line-height: 1.4;
        }
    }
</style>
