<script>
    import { Item } from "../../index";
    import { userLocale } from "$lib/stores.js";
    export let data;
    // console.log(data);

    // TODO: Add icon to prerequisites? (AR icon, quest icon, class icon..)
</script>

<h2>Rewards</h2>
<ul class="unstyled-list" role="list">
    {#each data.quest_rewards as reward}
    <!-- Hide number based on reward type and amount -->
        <Item 
            name={reward.name}
            thumb={reward.thumb}
            href={reward.href}
            number={reward.amount}
            source={{ en_US: "type " + reward.reward_type, ja_JP: "type " + reward.reward_type }}
        />
    {/each}
</ul>

{#if data.quest_unlock_data.quest_conditions || data.quest_preconditions.length > 0}
    <h2>Prerequisites</h2>
    <ul class="unstyled-list" role="list">
        {#if data.quest_unlock_data.quest_conditions}
            {#each data.quest_unlock_data.quest_conditions as condition}
                <li class="box">
                    <span class="step-id">Required to unlock quest</span>
                    <p>{condition.desc[$userLocale]}</p>
                    <div class="flex g-50" style="flex-wrap: wrap">
                        {#if condition.quest_id}
                            <a href="/db/quest/{condition.quest_id}"
                                >View Quest</a
                            >
                        {/if}
                    </div>
                </li>
            {/each}
        {/if}
        {#each data.quest_preconditions as precondition}
            <li class="box">
                <span class="step-id">Required to accept quest</span>
                <p>{precondition.desc[$userLocale]}</p>
            </li>
        {/each}
    </ul>
{/if}

<h2>Steps</h2>
<input type="checkbox" id="synopses-toggle" />
<label for="synopses-toggle">View Synopses</label>
<ol class="unstyled-list" role="list">
    <li class="box synopsis">
        <span id="step-final" class="step-id">Prologue</span>
        <blockquote class="synopsis">
            {data.desc[$userLocale]}
        </blockquote>
    </li>
    {#each data.quest_condition_steps as step}
        <li class="box">
            <span id={step.id} class="step-id"
                >{step.id.replace("step", "Step ")}</span
            >
            {#each step.condition_items as condition}
                {#each condition.descriptionId as description}
                    <p>{description.desc[$userLocale]}</p>
                    <div class="flex g-50" style="flex-wrap: wrap">
                        {#if condition.locationId}
                            <a href="/db/map/{condition.locationId}"
                                >View Location</a
                            >
                        {/if}
                        <!-- Doesn't work well because of "Activate a teleportal" on MQ101_020 linking to /npc/cty01 -->
                        <!-- {#if condition.npcId}
                            <a href="/db/npc/{condition.npcId}"
                                >View NPC</a
                            >
                        {/if} -->
                        {#if condition.dungeonId}
                            <a href="/db/map/{condition.dungeonId}"
                                >View Dungeon</a
                            >
                        {/if}
                    </div>
                {/each}
                {#if condition.synopsisId?.length > 0}
                    {#each condition.synopsisId as synopsis}
                        <blockquote class="synopsis">
                            {synopsis.desc[$userLocale]
                                .replace(
                                    "◇　　　　　◇　　　　　◇　　　　　◇\r\n\r\n",
                                    ""
                                )
                                .replace(
                                    "　　　　　　◇　　　　　◇　　　　　◇　　　　　◇\n\n",
                                    ""
                                )}
                        </blockquote>
                    {/each}
                {/if}
            {/each}
        </li>
    {/each}
    <!-- SQ103_234 has no completion text -->
    {#if data.done_synopsis !== 0 || data.done_text !== 0}
        <li class="box">
            <span id="step-final" class="step-id">Complete</span>
            {#if data.done_text !== 0}
                <p>{data.doneText[$userLocale]}</p>
            {/if}
            {#if data.done_synopsis !== 0}
                <blockquote class="synopsis">
                    {data.doneSynopsis[$userLocale]
                        .replace(
                            "◇　　　　　◇　　　　　◇　　　　　◇\r\n\r\n",
                            ""
                        )
                        .replace(
                            "　　　　　　◇　　　　　◇　　　　　◇　　　　　◇\n\n",
                            ""
                        )}
                </blockquote>
            {/if}
        </li>
    {/if}
</ol>

<style lang="scss">
    blockquote {
        line-height: 1.75;
        color: var(--text2);
        // font-style: italic;
        margin: 0;
        border-left: 6px solid var(--surface2);
        padding-left: 1rem;
        padding-block: 0.5rem;
    }

    ul {
        grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
    }

    ol {
        margin-top: 0.5rem;
    }

    li {
        max-inline-size: none;
    }

    li p {
        margin: 0;
        max-inline-size: none;
    }

    .step-id {
        color: var(--accent);
        font-weight: 600;
    }

    #synopses-toggle:not(:checked) ~ ol .synopsis {
        display: none;
    }
</style>
