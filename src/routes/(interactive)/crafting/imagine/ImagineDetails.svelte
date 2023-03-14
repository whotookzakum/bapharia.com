<script>
    import imagineParams from "$lib/jsondata/imagine/param_level.json";
    export let imagine;
    let level = 1;

    const allLevelsData = imagineParams.filter(
        (params) => params.pattern_id === imagine.param_type
    );

    $: levelData = allLevelsData.find((levelData) => levelData.level === level);

    // console.log(imagine);

    const stats = [
        {
            abbr: "str",
            text: "筋力",
        },
        {
            abbr: "int",
            text: "知力",
        },
        {
            abbr: "hp",
            text: "最大HP",
        },
        {
            abbr: "vit",
            text: "耐久力",
        },
        {
            abbr: "mnd",
            text: "精神力",
        },
        {
            abbr: "offensive_power",
            text: "攻撃力",
        },
        {
            abbr: "dex",
            text: "器用さ",
        },
    ];
</script>

<table>
    <thead>
        <th colspan="3">{imagine.name}</th>
    </thead>
    <tbody>
        <tr>
            <td rowspan="6">Hey</td>
        </tr>
        <tr>
            <td>
                初期
                <i>Lv. </i>
                <span>
                    <b>1~1</b>
                    (Max Lv: <b>{imagine.imagine_max_level}</b>)
                </span>
            </td>
        </tr>
        <tr>
            <td
                >属性 <b>{imagine.attribute === 0 ? "ー" : imagine.attribute}</b
                ></td
            >
            <td />
            <td>インターバル: <b>CD Sec.</b></td>
        </tr>
        <tr>
            <td
                >スキル <span>{imagine.skillName} ／ {imagine.type}</span></td
            >
            <td>効果値 <b>{levelData.skill}</b></td>
        </tr>
        <tr>
            <td>アビリティ名 <span>????</span></td>
            <td>効果値 <b>????</b></td>
        </tr>
        <tr />
    </tbody>
</table>

<div style="display: none;">
    <h2 class="item-name">{imagine.name}</h2>
    <div class="item-details" class:level-not-initial={level > 1}>
        <div>
            <div class="stat-adjustable">
                Current Level: <b>{level}</b>
            </div>
            <input
                type="range"
                name="level-selector"
                id="level-selector"
                bind:value={level}
                min={1}
                max={imagine.imagine_max_level}
            />
        </div>
        <div class="stat-row">
            <div class="stat item-level">
                初期
                <i>Lv. </i>
                <span>
                    <b>1~1</b>
                    (Max Lv: <b>{imagine.imagine_max_level}</b>)
                </span>
            </div>
        </div>
        <hr />
        <div class="stat-row">
            <div class="stat element">
                属性 <b>{imagine.attribute === 0 ? "ー" : imagine.attribute}</b>
            </div>
            <div class="stat" />
            <div class="stat">
                インターバル: <b>CD Sec.</b>
            </div>
        </div>
        <hr />
        <div class="stat-row-grid">
            <div class="stat skill-name">
                スキル <span>{imagine.skillName} ／ {imagine.type}</span>
            </div>
            <div class="stat-adjustable">
                効果値 <b>{levelData.skill}</b>
            </div>
        </div>
        <hr />
        <div class="stat-row-grid">
            <div class="stat ability-name">
                アビリティ名 <span>????</span>
            </div>
            <div class="stat">
                効果値 <b>????</b>
            </div>
        </div>
        <hr />
        <div class="stat-row">
            <ul class="stats-wrapper">
                {#each stats as stat}
                    <li class="stat-adjustable">
                        {stat.text} <b>+{levelData[stat.abbr]}</b>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    $black: #000;
    $gray: #242424;
    $lightgray: #d0d0d0;
    $midgray: #333;
    $yellow: #ffce04;
    $highlight-hover: #fff;
    $highlight-active: #e7f837;

    table {
        table-layout: fixed;
        width: 900px;
    }

    table,
    td,
    th {
        border: 1px solid black;
    }

    .item-details {
        background: $lightgray;
        color: var(--text1-light);
        padding: var(--space-s);
    }

    .level-not-initial .stat-adjustable b {
        color: var(--accent);
    }

    .item-name {
        display: block;
        text-align: center;
        color: var(--text1-dark);
        padding: var(--space-3xs);
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.85), transparent);
    }

    .stat-row {
        display: flex;
        flex-wrap: wrap;

        & > * {
            flex: 1;
        }
    }

    .stat-row-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .stat:first-of-type {
            grid-column: 1/3;
        }
    }

    .stats-wrapper {
        padding: 0;
        margin: 0;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-transform: uppercase;
    }

    .stat,
    .stat-adjustable {
        display: flex;
        justify-content: space-between;
        padding: var(--space-3xs) var(--space-m) var(--space-3xs)
            var(--space-xs);
        border-left: 6px solid $gray;

        b {
            font-size: var(--step-1);
            font-weight: 800;
        }
    }

    // Specific stat styles
    .item-level {
        display: block !important;

        i {
            font-style: normal;
            font-size: var(--step-1);
        }
        span {
            font-size: var(--step-2);
        }
        b {
            font-size: var(--step-3);
        }
    }

    .element,
    .skill-name,
    .ability-name {
        display: block;
    }

    .element b,
    .skill-name span,
    .ability-name span {
        font-size: initial;
        margin: 0 var(--space-s);
    }

    hr {
        margin: var(--space-3xs) 0;
        height: 2px;
        background: linear-gradient(
            90deg,
            transparent -10%,
            gray,
            transparent 110%
        );
        border-radius: 50%;
    }
</style>
