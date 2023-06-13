<script>
    import { userLocale } from "$lib/stores";
    export let params, limit;
</script>

<h4>Refill Conditions</h4>
<ul>
    {#each params as param}
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
<div>(Accumulation limit: {limit})</div>
