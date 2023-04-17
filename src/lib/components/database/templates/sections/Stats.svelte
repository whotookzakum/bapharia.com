<script>
    export let values;
</script>

<h4>Stats</h4>
<div>
    ATK {values.offensive_power}
</div>
{#if values.defensive_power}
    <div>
        DEF {values.defensive_power}
    </div>
{/if}
{#if values.critical_power}
    <div>
        Crit Damage {values.critical_power}%
    </div>
{/if}
<div>
    STR {values.str}
</div>
<div>
    VIT {values.vit}
</div>
<div>
    DEX {values.dex}
</div>
<div>
    MND {values.mnd}
</div>
<div>
    INT {values.int}
</div>
