<script>
    import { userLocale } from "$lib/stores";
    export let data;

    // TODO: Memory unlock conditions (link to the treasure chest on map/quest in db)
</script>

<h2 id="effects">Effects</h2>
<ol class="unstyled-list">
    {#each data.efficacy_parameters as level}
        <li class="box">
            {#each Array(level.level) as _}
                <img
                    class="bottle-img"
                    src={data.thumb}
                    alt=""
                    width="64"
                    height="64"
                />
            {/each}
            <p>{level.desc[$userLocale]}</p>
            <hr />
            {#if level.use_count}
                <strong>{level.use_count} uses</strong>
            {/if}
            <!-- {#if level.use_time}
                <p>Available for {level.use_time}</p>
            {/if} -->
            <p>Probability: {level.occurancy_rate}%</p>
            <p>
                Cost: {level.cost}
                <img
                    src="/UI/Common/UI_CmnMoney1.png"
                    alt=""
                    width="24"
                    height="24"
                    style="margin: -7px -4px"
                />
            </p>
        </li>
    {/each}
</ol>

<h2 id="refill">Refill Conditions</h2>
<ul>
    {#each data.accumulate_condition_parameters as param}
        <li>
            {param.desc[$userLocale]}
            <ul>
                {#each param.rates as rate}
                    <li>
                        Accumulate {rate.accumulate_value} at {rate.lottery_rate}%
                        chance
                    </li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>
<div>(Accumulation limit: {data.bottle_accumulate_limit})</div>

<style lang="scss">
    li.box,
    p {
        max-inline-size: none;
    }

    .bottle-img {
        margin-inline: -1rem;
    }

    p {
        margin: 0;
    }

    strong {
        font-size: var(--step-1);
    }
</style>
