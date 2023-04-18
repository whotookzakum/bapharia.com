<script>
    import { userLocale } from "$lib/stores";
    import { Element, Class } from "./sections";
    export let data;
</script>

<Element imgSrc={data.elementImg} />
<Class imgSrc={data.classImg} />

<ol>
    {#each data.desc[$userLocale].split("\n") as skillLevelText, index}
        <li>
            {skillLevelText}
            {#if data.skill_mastery_param[index]?.condition_class_level}
                (Class level {data.skill_mastery_param[index]
                    .condition_class_level})
            {/if}
            {#if index === 2}
                <ul>
                    {#each data.abilities as ability}
                        <li>
                            {ability.desc[$userLocale]}
                            <!-- As long as they don't add α2, α3 then index 0 will work -->
                            (Class level {ability.skill_mastery_param[0]
                                .condition_class_level})
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ol>
