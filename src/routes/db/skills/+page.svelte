<script>
    export let data;
    // console.log(data.skills);
</script>

<main>
    <h1>Skills</h1>
    {#each data.skills as skill}
        <div class="box surface">
            <div class="flex" style="gap: 0.5rem">
                <img src={skill.thumb} alt="" width="64" height="64" />
                <div class="grid">
                    <h5>{skill.name}</h5>
                    <div>{skill.skill_id}</div>
                </div>
            </div>

            <div>Skill type: {skill.skill_type}</div>

            <div>
                Class: <img
                    src={skill.classImg}
                    alt=""
                    width="28"
                    height="28"
                />
            </div>

            {#if skill.desc}
            {#each skill.desc.split("\n") as skillLevelText, index}
            <div>
                {skillLevelText} 
                {#if skill.skill_mastery_param[index]?.condition_class_level}
                    (Class level {skill.skill_mastery_param[index].condition_class_level})
                {/if}
            </div>
        {/each}
            {/if}
            
            <hr>
            {#each skill.abilities as ability}
                <div>{ability.skill_id}</div>
                <div>
                    {ability.desc}
                    <!-- As long as they don't add α2, α3 then index 0 will work -->
                    (Class level {ability.skill_mastery_param[0].condition_class_level})
                </div>
            {/each}
        </div>
    {/each}
</main>

<style lang="scss">
    main {
        margin: auto;
        max-width: 65ch;
        display: grid;
        gap: 0.5rem;
    }

    h5 {
        margin: 0;
    }

    h6 {
        font-size: inherit;
        margin-top: 0.5rem;
        color: var(--accent);
    }
</style>
