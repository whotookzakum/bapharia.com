<script>
    import StatsChart from "./StatsChart.svelte";
    import classesData from "../classes.json";
    import { page } from "$app/stores";
    import StatsChartCheckboxes from "./StatsChartCheckboxes.svelte";
    export let data;
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

    let selectedClasses;
    let levelSelector = 50;
</script>

<input
    type="range"
    name=""
    id=""
    bind:value={levelSelector}
    max="100"
    min="1"
/>
<span>Level {levelSelector}</span>
<span>{selectedClasses}</span>
<StatsChartCheckboxes currentClassId={parseInt($page.params.classId)} bind:selectedClasses />
<StatsChart level={levelSelector} classes={selectedClasses} />

<svelte:component this={data.content} />

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
        <input type="radio" value="baseAbilities" bind:group={selectedSkills} />
        Base Abilities
    </label>

    <ul class="skills-grid unstyled-list grid" role="list">
        {#each skills as skill}
            <Skill {skill} />
        {/each}
    </ul>
</div> -->

<style lang="scss">
    .skills-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
</style>
