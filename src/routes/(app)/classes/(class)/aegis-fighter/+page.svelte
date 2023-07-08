<script>
    import HeroBanner from "$lib/components/HeroBanner.svelte";
    import Video from "$lib/components/Video.svelte";
    import PagesList from "$lib/components/layout/PagesList.svelte";
    import Skill from "../Skill.svelte";
    let selectedSkills = "tactical";
    import classes from "../../classes.json";
    import TableOfContents from "$lib/components/layout/TableOfContents.svelte";

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

<PagesList links={classes} />

<TableOfContents />

<article class="grid">
    <figure>
        <Video
            title="Aegis Fighter Combos"
            id="pDUq_9n3faI"
            bleed
            style="margin: 0"
        />
        <figcaption>
            Demonstration of some Aegis Fighter attacks and animation-cancel
            combos
        </figcaption>
    </figure>

    <h2>Shield Gauge</h2>
    <p>
        Aegis Fighters can hold down the subaction button to enter a guard
        stance. Successful blocks of enemy attacks will consume Shield Gauge.
        Once the gauge is depleted, shield-related skills will be temporarily
        unavailable. Press the normal attack button after blocking to perform a
        powerful counterattack.
    </p>

    <h2>Weak Point Targeting</h2>
    <p>
        Blast Archers deal increased damage when hitting an enemy's weak point.
        These points vary between enemies, such as the head or back. You may be
        able to hit weak spots with auto aim on some enemies, but this is
        unlikely to be the case for most enemies so players will have to switch
        between auto and manual aim for maximum efficiency.
    </p>

    <!-- <div id="skills">
        <h2>Skills</h2>
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
            <input
                type="radio"
                value="baseAbilities"
                bind:group={selectedSkills}
            />
            Base Abilities
        </label>

        <ul class="skills-grid unstyled-list grid" role="list">
            {#each skills as skill}
                <Skill {skill} />
            {/each}
        </ul>
    </div> -->

    <h2 id="meta">Meta</h2>
</article>

<style lang="scss">
    .skills-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
</style>
