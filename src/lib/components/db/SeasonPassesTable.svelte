<script>
    export let data;
</script>

<h2>Passes</h2>
<table>
    <thead>
        <tr>
            <td></td>
            {#each data.passes as pass}
                <th scope="col">{pass.text.name}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#if data.passes.some((pass) => pass.need_free > 0)}
            <tr>
                <th scope="row">Price</th>
                {#each data.passes as pass}
                    <td>
                        <span style="vertical-align: middle"
                            >{pass.need_free}</span
                        >
                        <img
                            src="/UI/Icon/Currency/UI_Icon_Currency_03.png"
                            alt="Rose Orbs"
                            height="24"
                            width="24"
                            class="inline"
                            style="margin: -1rem 0"
                        />
                    </td>
                {/each}
            </tr>
        {/if}
        {#if data.passes.some((pass) => pass.need_paid > 0)}
            <tr>
                <th scope="row">Price <small>(paid orbs)</small></th>
                {#each data.passes as pass}
                    <td>
                        <span style="vertical-align: middle"
                            >{pass.need_paid}</span
                        >
                        <img
                            src="/UI/Icon/Currency/UI_Icon_Currency_03.png"
                            alt="Rose Orbs"
                            height="24"
                            width="24"
                            class="inline"
                            style="margin: -1rem 0"
                        />
                    </td>
                {/each}
            </tr>
        {/if}
        <tr>
            <th scope="row">Daily quests</th>
            {#each data.passes as pass}
                <td>{[3, 4, 4][pass.type]}</td>
            {/each}
        </tr>
        <tr>
            <th scope="row">Weekly quests</th>
            {#each data.passes as pass}
                <td>{[4, 7, 7][pass.type]}</td>
            {/each}
        </tr>
        <tr>
            <th scope="row">Season quests</th>
            {#each data.passes as pass}
                <td>{pass.season_quests.length}</td>
            {/each}
        </tr>
        <tr>
            <th scope="row">Bonus ranks</th>
            {#each data.passes as pass}
            <!-- 23 7 -->
                <td>{pass.reward_rank}</td>
            {/each}
        </tr>
        <tr>
            <th scope="row">Rank up cost</th>
            <td colspan="3">
                {data.rankup_point} points / {data.rankup_free} orbs
                <img
                    src="/UI/Icon/Currency/UI_Icon_Currency_03.png"
                    alt="Rose Orbs"
                    height="24"
                    width="24"
                    class="inline"
                    style="margin: -1rem 0"
                />
                {#if data.rankup_paid > 0}
                    / {data.rankup_paid} paid orbs
                {/if}
            </td>
        </tr>
        <tr>
            <th scope="row">Unlock shop</th>
            <td colspan="3">
                Rank {data.shop_emancipation_rank}
            </td>
        </tr>
        <tr>
            <th scope="row">Max rank</th>
            <td colspan="3">
                {data.max_rank}
            </td>
        </tr>
        <tr>
            <th scope="row">Max points</th>
            <td colspan="3">
                {data.point_max}
            </td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    table {
        text-align: left;
        width: 100%;
    }

    td,
    thead th {
        text-align: center;
    }

    th,
    td {
        padding: 0.5rem 1rem;
    }

    tbody tr {
        border-top: 1px solid var(--surface2);
    }

    tbody tr:nth-of-type(2n + 1) > * {
        // background: var(--surface1);
    }

    thead tr {
        *:first-child {
            border-top-left-radius: 1rem;
        }
        *:last-child {
            border-top-right-radius: 1rem;
        }
    }

    tbody tr:last-of-type {
        *:first-child {
            border-bottom-left-radius: 1rem;
        }
        *:last-child {
            border-bottom-right-radius: 1rem;
        }
    }
</style>