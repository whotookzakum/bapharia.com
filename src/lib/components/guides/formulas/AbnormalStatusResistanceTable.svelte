<script>
    import InputNumber from "$lib/components/InputNumber.svelte";

    let resistance = 0;
    let ability = 0;
</script>

<div class="flex gap-2" style="font-size: var(--step-1)">
    <InputNumber
        bind:value={resistance}
        suffix="Resistance"
        min={0}
        max={999}
        initialValue={0}
    />
    <InputNumber
        bind:value={ability}
        prefix="Ability"
        suffix="%"
        textAlign="right"
        min={0}
        max={100}
        initialValue={0}
    />
</div>

<table class="table-fixed" style="font-size: var(--step-1)">
    <thead>
        <tr>
            <th>Times Applied</th>
            <th>Resistance</th>
            <th>Success Rate</th>
            <th>Duration</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>+0</td>
            <td>{Math.min(Math.max(100 - resistance + ability, 0), 100)}%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td>2</td>
            <td>+50</td>
            <td
                >{Math.min(Math.max(100 - resistance - 50 + ability, 0), 100)}%
                <small class="text2">for 60 seconds</small></td
            >
            <td>100%</td>
        </tr>
        <tr>
            <td>3</td>
            <td>+75</td>
            <td
                >{Math.min(Math.max(100 - resistance - 75 + ability, 0), 100)}%
                <small class="text2">for 60 seconds</small></td
            >
            <td>100%</td>
        </tr>
        <tr>
            <td>4</td>
            <td>+100?</td>
            <!-- +100 or Immune or +999 or ∞ -->
            <td>{Math.min(Math.max(100 - resistance - 100 + ability, 0), 100)}%? <small class="text2">for 60 seconds</small></td>
            <td>0%</td>
        </tr>
    </tbody>
</table>
