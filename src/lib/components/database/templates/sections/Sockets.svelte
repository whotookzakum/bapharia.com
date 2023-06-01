<script>
    export let data;
    console.log(data)
</script>

<h4>Sockets</h4>
<table>
    <thead>
        <tr>
            <th>ソケット数</th>
            <!-- 大成功時の入手武器ソケット数確率 -->
            <th>大成功時のソケット数確率</th>
            <!-- 成功時の入手武器ソケット数確率 -->
            <th>成功時のソケット数確率</th>
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


<style>
    td, th {
        text-align: center !important;
    }
</style>

