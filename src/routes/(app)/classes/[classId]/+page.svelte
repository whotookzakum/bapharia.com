<script>
    import Video from "$lib/components/Video.svelte";
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
</script>

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
</article>

<style lang="scss">
    .skills-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
</style>
