<script>
    import dungeons from "./drops.json";
    import { userLocale } from "$lib/stores";
</script>

<div style="margin: 0 1rem;">
    {#each dungeons as dungeon}
    <header>
        <h2 style:line-height="1.4">
            {dungeon.name[$userLocale]}
        </h2>
    </header>

    <ul class="unstyled-list grid">
        {#each dungeon.rewards as reward}
            {#if !reward.reward_id.includes("EXP") && !reward.reward_id.includes("LUNO")}
                <li class="box" class:huge={reward.lotteryWithRewards?.length > 4}>
                    <div class="component-label">
                        {reward.reward_id}
                        <strong
                            >{reward.probability === 0
                                ? 100
                                : reward.probability / 100}%</strong
                        >
                    </div>
                    <div>
                        {#if reward.lotteryWithRewards}
                            {#each reward.lotteryWithRewards as lotteryReward}
                                <span class="plug">{lotteryReward.name[$userLocale]}</span>
                            {/each}
                        {/if}
                        {#if reward.reward_id.includes("TAB")}
                            <div>ベータスキル Beta Skill</div>
                        {/if}
                        {reward.name[$userLocale]}
                    </div>
                </li>
            {/if}
        {/each}
    </ul>
{/each}
</div>

<style lang="scss">
    .component-label {
        margin: 0;
    }

    .box {
        border-radius: 5px;
    }

    header .component-label {
        font-size: var(--step-2);
    }

    ul {
        grid-template-columns: 1fr 1fr 1fr;
        max-inline-size: none;
        width: 100%;
    }

    li {
        max-inline-size: none;
        width: 100%;
    }

    .huge {
        grid-column: 1/4;
    }

    .plug:not(:last-of-type)::after {
        content: ", ";
    }
</style>
