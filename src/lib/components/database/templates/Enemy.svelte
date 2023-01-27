<script>
    import ModelViewer from "$lib/components/ModelViewer.svelte";
    import allItems from "$lib/ntdata/items.json";
    import texts from "$lib/ntdata/texts_ja_JP.json";
    import { browser } from "$app/environment";
    import _ from "lodash";

    export let item;
    const { hit_point, attack_power, defence_power } = item.level_params[0];
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

    function getFieldName(field) {
        // switch (field) {
        //     case "fld001_N":
        //         return "Minster Hills";
        //     case "fld001_E":
        //         return "Skyquake Fields";
        //     case "fld001_W":
        //         return "Andra Basin";
        //     case "fld001_S":
        //         return "Calm Eve Terraces";
        //     case "fld002_E":
        //         return "Soundless Foothills";
        //     case "fld002_W":
        //         return "Fiel Pond";
        //     case "fld002_S":
        //         return "Divine Haven Hill";
        // }
        switch (field) {
            case "fld001_N":
                return "ミンスター丘陵";
            case "fld001_E":
                return "海鳴りの草原";
            case "fld001_W":
                return "アンドラ盆地";
            case "fld001_S":
                return "夕凪の段丘";
            case "fld002_E":
                return "鎮まりの山麓";
            case "fld002_W":
                return "フィエル嶺水地";
            case "fld002_S":
                return "神の見守る丘";
        }
    }

    const dropsUngrouped = item.drop_items.flatMap((drop) => {
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

    const dropGroups = _.groupBy(dropsUngrouped, (drop) => drop.content_id);
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
