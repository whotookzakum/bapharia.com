<script>
    import InputText from "$lib/components/InputText.svelte";
    import { currency } from "./stores";
    import Icon from "@iconify/svelte";

    let orbsAmount = "100";
    let orbsCost;
    let conversionRate = "10";

    $: {
        $currency;
        updateOrbsCost();
    }

    function updateOrbsCost() {
        if (
            !orbsAmount.match(/[^0-9]/) &&
            conversionRate &&
            !conversionRate.match(/[^0-9.]/)
        ) {
            orbsCost = (orbsAmount * $currency.rate * conversionRate).toFixed(
                $currency.decimals,
            );
        }
    }

    function updateOrbsAmount() {
        if (!orbsCost.match(/[^0-9.]/)) {
            orbsAmount = (orbsCost / $currency.rate / conversionRate).toFixed(
                0,
            );
        }
    }
</script>

<div class="box">
    <h2 class="mini-header visually-hidden">Price Conversion</h2>
    <div class="flex g-50" style="align-items: center;">
        <InputText
            bind:value={orbsAmount}
            inputFunction={updateOrbsCost}
            suffix="Orbs"
            invalid={orbsAmount?.match(/[^0-9]/)}
        />

        <Icon icon="uil:exchange" width="22" />

        <InputText
            bind:value={orbsCost}
            inputFunction={updateOrbsAmount}
            prefix={$currency.symbol}
            invalid={orbsCost?.match(/[^0-9.]/)}
        />
        @
        <InputText
            bind:value={conversionRate}
            inputFunction={updateOrbsCost}
            prefix={$currency.symbol}
            suffix="per orb"
            invalid={conversionRate?.match(/[^0-9.]/)}
        />
    </div>
</div>