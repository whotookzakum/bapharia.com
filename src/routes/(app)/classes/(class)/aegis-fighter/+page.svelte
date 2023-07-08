<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import Video from "$lib/components/Video.svelte";
    import SkillIcon from "../../SkillIcon.svelte";
    let selectedSkills = "tactical";

    const skills = [
        {
            name: "Brutal Blow",
            element: "Fire",
            type: "Attack / Buff",
            G1: {
                desc: "Powerful horizontal lashing attack",
                levelReq: 6,
            },
            G2: {
                desc: "Increased Damage Dealt",
                levelReq: 25,
            },
            G3: {
                desc: "Can be charged, and damage dealt increases as Charge Level increases.",
                levelReq: 44,
                alpha: {
                    desc: "Increases the time of the charge, but increases Damage Dealt.",
                    levelReq: 35,
                },
                beta: {
                    desc: "Super armor state while charging.",
                    levelReq: 35,
                },
            },
        },
    ];
</script>

<HeroBanner bannerUrl="/guides/classes/banner.webp">
    <img
        src="/UI/Icon/ClassL/UI_IconClassL_12.png"
        alt=""
        width="128"
        height="128"
    />
    <h1>Aegis Fighter</h1>
    <p>
        A close-range class that fights on the front line, utilizing offensive
        and defensive skills. Aegis Fighters wield a one-handed sword and shield
        and are mainly a tank class. Their skills excel in crowd-control and
        enemy aggro management. They have various Light-elemental skills.
    </p>
</HeroBanner>

<!-- <figure>
    <Video
        title="Aegis Fighter Combos"
        id="pDUq_9n3faI"
        bleed
        style="margin: 0"
    />
    <figcaption>
        Demonstration of some Aegis Fighter attacks and animation-cancel combos
    </figcaption>
</figure> -->

<div id="class-mechanic" class="box">
    <span class="component-label">Class Mechanic</span>
    <h2>Shield Gauge</h2>
    <p>
        Aegis Fighters can hold down the subaction button to enter a guard
        stance. Successful blocks of enemy attacks will consume Shield Gauge.
        Once the gauge is depleted, shield-related skills will be temporarily
        unavailable. Press the normal attack button after blocking to perform a
        powerful counterattack.
    </p>
</div>

<div id="skills" class="box">
    <label>
        <input type="radio" value="tactical" bind:group={selectedSkills} />
        Tactical Skills
    </label>
    <label>
        <input type="radio" value="ult" bind:group={selectedSkills} />
        ULT Skills
    </label>
    <label>
        <input type="radio" value="base" bind:group={selectedSkills} />
        Base Actions
    </label>
    <label>
        <input
            type="radio"
            value="classAbilities"
            bind:group={selectedSkills}
        />
        Class Abilities
    </label>
    <label>
        <input type="radio" value="baseAbilities" bind:group={selectedSkills} />
        Base Abilities
    </label>

    <ul class="skills-grid unstyled-list grid" role="list">
        {#each skills as skill}
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
                        <h3 style:margin="0">{skill.name}</h3>
                        <span>{skill.element} • {skill.type}</span>
                    </div>
                </header>
                <hr />
                <section>
                    <span class="component-label">G1 (Level {skill.G1.levelReq})</span>
                    <p>{skill.G1.desc}</p>
                </section>
                <hr />
                <section>
                    <span class="component-label">G2 (Level {skill.G2.levelReq})</span>
                    <p>{skill.G2.desc}</p>
                </section>
                <hr />
                <section>
                    <span class="component-label">G3 n (Level {skill.G3.levelReq})</span>
                    <p>{skill.G3.desc}</p>
                </section>
                <div
                    class="box"
                    style:background="var(--surface3)"
                    style:margin-top="0.5rem"
                >
                    <section>
                        <span class="component-label">G3 α (Level {skill.G3.alpha.levelReq})</span>
                        <p>{skill.G3.alpha.desc}</p>
                    </section>
                    <hr style:background="rgba(128, 128, 255, 0.1)" />
                    <section>
                        <span class="component-label">G3 β (Level {skill.G3.beta.levelReq})</span>
                        <p>{skill.G3.beta.desc}</p>
                    </section>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    #class-mechanic {
        max-width: 55ch;
        margin: 1rem 0;

        h2 {
            margin: 0;
        }

        p {
            margin-bottom: 0;
        }
    }

    .skills-grid {
        grid-template-columns: 1fr 1fr;
    }

    .skill > hr {
        margin: 0;
    }

    .skill {
        background: var(--surface2);

        .component-label {
            margin: 0;
            text-transform: none;
        }

        section p {
            margin: 0;
            // font-size: var(--step-0);
            // line-height: 1.4;
        }
    }
</style>
