<script>
    import allItems from "$lib/ntdata/items.json";
    import texts from "$lib/ntdata/texts_ja_JP.json";
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

    const drops = item.drop_items.flatMap((drop) => {
        const itemData = allItems.find((i) => i.id === drop.item_index);
        if (!itemData) return [];
        const itemNameStringId = itemData.name;
        const allItemTexts = texts.find(
            (obj) => obj.name === "item_text"
        ).texts;
        const itemName = allItemTexts.find(
            (t) => t.id === itemNameStringId
        ).text;
        return { name: itemName, droprate: drop.drop_rate };
    });
</script>

<dl>
    <div>
        <dt class="component-label">Stats</dt>
        <dd>Hit Points <strong>{hit_point}</strong></dd>
        <dd>Attack <strong>{attack_power}</strong></dd>
        <dd>Defense <strong>{defence_power}</strong></dd>

        <dt class="component-label">Resistance</dt>
        <dd>Slash <strong>{resist_slash}</strong></dd>
        <dd>Thrust <strong>{resist_thrust}</strong></dd>
        <dd>Blow <strong>{resist_blow}</strong></dd>
        <dd>Rock <strong>{resist_rock}</strong></dd>
        <dd>Thunder <strong>{resist_thunder}</strong></dd>
        <dd>Fire <strong>{resist_fire}</strong></dd>
        <dd>Ice <strong>{resist_ice}</strong></dd>
        <dd>Light <strong>{resist_light}</strong></dd>
        <dd>Darkness <strong>{resist_darkness}</strong></dd>
        <dd>Stun <strong>{resist_stun}</strong></dd>
        <dd>Poison <strong>{resist_poison}</strong></dd>
        <dd>Sleep <strong>{resist_sleep}</strong></dd>
        <dd>Berserk <strong>{resist_berserk}</strong></dd>
        <dd>Dark <strong>{resist_dark}</strong></dd>
        <dd>Bind <strong>{resist_bind}</strong></dd>
        <dd>Palsy <strong>{resist_palsy}</strong></dd>
        <dd>Drain <strong>{resist_drain}</strong></dd>
        <dd>Race ID <strong>{race_id}</strong></dd>
        <dd>Attribute <strong>{attribute}</strong></dd>
    </div>
    <div>
        <dt class="component-label">Drops</dt>
        {#each drops as drop}
            <dd>
                {drop.name} <strong>{drop.droprate}</strong>
            </dd>
        {/each}
    </div>
</dl>

<style lang="scss">
    dl {
        grid-template-columns: 20ch auto;
        max-inline-size: none;

        dd {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
        }

        * {
            margin: 0;
        }
    }
</style>
