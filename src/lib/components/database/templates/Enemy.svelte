<script>
    export let item;
    const { hit_point } = item.level_params[0]
</script>
<p>{JSON.stringify(item.level_params)}</p>
<dl>
    <div>
        <!-- <dt>Weapon Level</dt>
        <dd>Lv. 10</dd>
        
        <dt>Element</dt>
        <dd>Fire</dd> -->

        <dt class="component-label">Stats</dt>
        <dd>Hit Points <strong>{hit_point}</strong></dd>
    </div>
    <div>
        <dt class="component-label">Special Effects</dt>
        <dd>Ogre Killer <strong>9%~11% / 12%~18%</strong></dd>
        <dd>Demihuman Killer <strong>9%~11% / 12%~18%</strong></dd>
        <dd>Goblin Killer <strong>9%~11% / 12%~18%</strong></dd>
        <!-- <dt>Sockets</dt>
        <dd>1~4</dd> -->

        <dt class="component-label">Crafting Recipe</dt>
        <dd>Dragon Bone <strong>x13</strong></dd>
        <dd>Drip Stone <strong>x4</strong></dd>
        <dd>Suzuki Ore <strong>x1</strong></dd>
        <dd>Luno <strong>20,000</strong></dd>
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