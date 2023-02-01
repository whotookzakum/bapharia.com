<script>
    import ModelViewer from "$lib/components/ModelViewer.svelte";
    import allItems from "$lib/ntdata/items.json";
    import texts from "$lib/ntdata/texts_ja_JP.json";
    import { browser } from "$app/environment";
    import _ from "lodash";

    export let item;
    $: ({ hit_point, attack_power, defence_power } = item.level_params[0]);
    const {
        resist_slash,
        resist_thrust,
        resist_blow,
        resist_rock,
        resist_thunder,
        resist_fire,
        resist_ice,
        resist_light,
        resist_darkness,
        resist_stun,
        resist_poison,
        resist_sleep,
        resist_berserk,
        resist_dark,
        resist_bind,
        resist_palsy,
        resist_drain,
        race_id,
        attribute,
    } = item.appearance[0];

    // use graphql here or check if polyglot can fetch text from this file
    async function getLocalizedString(locale, namespace, stringId) {
        const res = await fetch(`/api/locale/${locale}`);
        const data = await res.json();
        return data[namespace][stringId];
    }

    if (browser) {
        const hi = getLocalizedString("ja_JP", "Common", "1").then(
            (res) => res
        );
        // console.log(hi);
    }


    const map_name_json = {
    "fld001_N": "アンドラ盆地",
    "fld001_S": "海鳴りの草原",
    "fld001_W": "夕凪の段丘",
    "fld001_E": "ミンスター丘陵",
    "fld002_S": "神の見守る丘",
    "fld002_E": "鎮まりの山麓",
    "fld002_W": "フィエル嶺水池",
    "fld004_N": "帰らずの砂塵",
    "fld004_C": "レインフォール旧街道",
    "fld004_W": "オルビド平野",
    "fld004_S": "風止みの荒地",
    "fld004_E": "陽炎の谷",
    "fld003_C": "リッツェ交易街道",
    "fld003_S": "ガレィリッジ廃道",
    "fld003_E": "メリソス川流域",
    "pub004": "音無き都・自由探索",
    "pub007": "枷神の産屋・自由探索",
    "pub009": "巨竜の爪痕・自由探索",
    "pub0102": "機跡の谷・自由探索",
    "pub0201": "ボルオム遺跡・自由探索",
    "pub0801": "木漏れ日射す林道・自由探索",
    "pub0802": "ともし火の森・自由探索",
    "pub0803": "雨止まぬ森・自由探索",
    "pub0804": "緋染めの樹林・自由探索",
    "pub0901": "風精の舞台・自由探索",
}

    function getFieldName(field) {
        return map_name_json[field] || field
    }

    $: dropsUngrouped = item.drop_items.flatMap((drop) => {
        const itemData = allItems.find((i) => i.id === drop.item_index);
        if (!itemData) return [];
        const itemNameStringId = itemData.name;
        const allItemTexts = texts.find(
            (obj) => obj.name === "item_text"
        ).texts;
        const itemName = allItemTexts.find(
            (t) => t.id === itemNameStringId
        ).text;
        return {
            name: itemName,
            droprate: drop.drop_rate,
            content_id: drop.content_id,
        };
    });

    $: dropGroups = _.groupBy(dropsUngrouped, (drop) => drop.content_id);
</script>

<div class="wrapper">
    <section>
        <h4>Stats</h4>
        <dl>
            <div class="row">
                <dt>Hit Points</dt>
                <dd>{hit_point}</dd>
            </div>
            <div class="row">
                <dt>Attack</dt>
                <dd>{attack_power}</dd>
            </div>
            <div class="row">
                <dt>Defense</dt>
                <dd>{defence_power}</dd>
            </div>
        </dl>
    </section>
    
    <section>
        <h4>Found in</h4>
        <ul class="maps-list">
            {#each Object.keys(dropGroups) as key}
                <li><a href="/">{getFieldName(key)}</a></li>
            {/each}
        </ul>
    </section>
    
    <section>
        <h4>Drops</h4>
        {#each Object.keys(dropGroups) as key}
            <h5>{getFieldName(key)}</h5>
            <dl>
                {#each dropGroups[key] as drop}
                <div class="row">
                    <dt>{drop.name}</dt>
                    <dd>{parseInt(drop.droprate) / 100}%</dd>
                </div>
                {/each}
            </dl>
        {/each}
    </section>

    <ModelViewer />
</div>

<style lang="scss">

    .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-block: 0.5rem;
    }

    h4 {
        margin: 0;
        font-size: var(--step-0);
    }
    
    h5 {
        margin-block: var(--space-xs) 0;
        font-family: inherit;
        font-size: var(--step--0);
        color: var(--accent);

        &:first-of-type {
            margin: 0;
        }
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul.maps-list {
        list-style: none;
        display: initial;

        li {
            display: initial;
        }

        li:not(:last-child)::after {
            content: ', ';
        }
    }

    dl {
        // max-inline-size: none;
        gap: 0;
        margin: 0;
    }

    .row {
        display: flex;
        justify-content: space-between;

        dt {
            font-weight: inherit;
        }

        dd {
            font-weight: 600;
            color: var(--accent);
        }
    }
</style>
