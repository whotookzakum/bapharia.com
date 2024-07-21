<script>
    import { userLocale } from "$lib/stores";

    export let data;

    const SOCKET_HEADERS = [
        {
            ja_JP: "ソケット数",
            en_US: "Sockets"
        },
        {
            ja_JP: "大成功時のソケット数確率",
            en_US: "Rate<br><small class=\"accent1 font-normal\">(Great Success)</small>"
        },
        {
            ja_JP: "成功時のソケット数確率",
            en_US: "Rate<br><small class=\"accent1 font-normal\">(Success)</small>"
        },
    ]
</script>


<table class="lines whitespace-nowrap text-center" style="font-size: var(--step--1)">
    <thead>
        <tr>
            {#each SOCKET_HEADERS as header}
                <th>{@html header[$userLocale]}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>{data.bonus_ability_rate1}%</td>
            <td>{data.base_ability_rate1}%</td>
        </tr>
        <tr>
            <td>2</td>
            <td>{data.bonus_ability_rate2}%</td>
            <td>{data.base_ability_rate2}%</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{data.bonus_ability_rate3}%</td>
            <td>{data.base_ability_rate3}%</td>
        </tr>
        <tr>
            <td>4</td>
            <td>{data.bonus_ability_rate4}%</td>
            <td>{data.base_ability_rate4}%</td>
        </tr>
    </tbody>
</table>

