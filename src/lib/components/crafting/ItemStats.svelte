<script>
    export let item;
    const level = item.level_table_min
    let levelData = item.param_data.find((param) => param.level === level);
</script>

<table>
    <tbody>
        <tr>
            <td>装備品レベル</td>
            <td>
                <b class="stat">Lv. {level}</b>
            </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>攻撃力</td>
            <td>
                <b class="stat">{levelData.offensive_power}</b>
            </td>
        </tr>
        <tr>
            <td>防御力</td>
            <td>
                <b class="stat">{levelData.defensive_power}</b>
            </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>筋力</td>
            <td>
                <b class="stat">{levelData.str}</b>
            </td>
        </tr>
        <tr>
            <td>耐久力</td>
            <td>
                <b class="stat">{levelData.vit}</b>
            </td>
        </tr>
        <tr>
            <td>器用さ</td>
            <td>
                <b class="stat">{levelData.dex}</b>
            </td>
        </tr>
        <tr>
            <td>知力</td>
            <td>
                <b class="stat">{levelData.int}</b>
            </td>
        </tr>
        <tr>
            <td>精神力</td>
            <td>
                <b class="stat">{levelData.mnd}</b>
            </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>アビリティ</td>
            <td>
                <b>：抽選により決定</b>
            </td>
        </tr>
    </tbody>
</table>


<style lang="scss">
    $black: #000;
    $gray: #242424;
    $lightgray: #d0d0d0;
    $midgray: #333;
    $yellow: #ffce04;
    $highlight-hover: #fff;
    $highlight-active: #e7f837;

    table {
        border-collapse: collapse;
        width: 300px;
        display: grid;
        gap: 0.25rem;
        
    }

    tbody {
        padding-bottom: 0.25rem;
        border-bottom: 2px solid $gray;
        border-image: linear-gradient(
                90deg,
                transparent 5%,
                $gray,
                transparent 95%
            )
            1;
    }

    td {
        padding: 0.25rem 0.5rem;
    }

    tr {
        display: flex;
        justify-content: space-between;
        border-left: 6px solid $gray;
    }

    .stat {
        font-size: var(--step-0);
        line-height: 1;
    }
</style>