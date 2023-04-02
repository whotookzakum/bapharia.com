<script>
    export let data;
    console.log(data);
</script>

<main>
    <h1>Liquid Memories</h1>
    {#each data.liquidMemories as memory}
        <div class="box surface">
            <div class="grid">
                <h5>{memory.name}</h5>
                <div>{memory.id}</div>
            </div>
            <ol>
                {#each memory.efficacy_parameters as level}
                    <li>
                        <div>{level.desc}</div>
                        <div>Probability: {level.occurancy_rate}%</div>
                        <div>
                            Cost: {level.cost}
                            <img
                                src="/UI/Common/UI_CmnMoney1.png"
                                alt=""
                                width="24"
                                height="24"
                                style="margin: -7px -4px"
                            />
                        </div>
                    </li>
                {/each}
            </ol>
            <hr />
            <ol>
                {#each memory.accumulate_condition_parameters as accumulateParam}
                    <li>
                        {accumulateParam.desc}
                        {#each accumulateParam.rates as rate}
                            <div>
                                Accumulate {rate.accumulate_value} at {rate.lottery_rate}%
                                chance
                            </div>
                        {/each}
                    </li>
                {/each}
            </ol>
            <div>(Accumulation limit: {memory.bottle_accumulate_limit})</div>
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
</style>
