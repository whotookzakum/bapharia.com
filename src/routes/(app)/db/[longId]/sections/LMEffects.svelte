<script>
    import { userLocale } from "$lib/stores";
    export let levels;
</script>

<h4>Effects</h4>
<ol>
    {#each levels as level}
        <li>
            <div>{level.desc[$userLocale]}</div>
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
