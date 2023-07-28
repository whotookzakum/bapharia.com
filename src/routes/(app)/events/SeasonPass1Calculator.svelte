<script>
    const TOTAL_WEEKS = 9
    const TOTAL_DAYS = 60 // reset on the day it was launched so we got 1 weekly reset for free
    const FREE_DAILY_POINTS = 30
    const PAID_DAILY_POINTS = 30
    const FREE_WEEKLY_POINTS = 400
    const PAID_WEEKLY_POINTS = 300
    const FREE_SEASONAL_POINTS = 2010
    const PAID_SEASONAL_POINTS = 1790

    let startDay = 1
    let purchaseDay = 1

    let lateStartPenaltyPaid = 0
    let lateStartPenaltyFree = 0

    $: {
        lateStartPenaltyPaid = 0
        lateStartPenaltyFree = 0

        // Day 59/60, can't complete 3 logins
        if (startDay > TOTAL_DAYS - 2) {
            // Free loses 200 * TOTAL_WEEKS
            lateStartPenaltyFree += 200 * TOTAL_WEEKS
        }

        // Day 57/60, can't complete 5 logins
        if (startDay > TOTAL_DAYS - 4) {
            // Free loses 110 seasonal
            lateStartPenaltyFree += 110
        }


        // Day 32/60, can't complete 30 logins
        if (startDay > TOTAL_DAYS - 29) {
            // Free loses 220 seasonal
            lateStartPenaltyFree += 220
        }

        

        // Day 59/60, can't complete 3 logins
        if (purchaseDay > TOTAL_DAYS - 2) {
            // Paid loses 200 * TOTAL_WEEKS (100 from weekly 3x, 5x)
            lateStartPenaltyPaid += 200 * TOTAL_WEEKS
        }

        // Day 57/60, can't complete 5 logins
        if (purchaseDay > TOTAL_DAYS - 4) {
            // Paid loses 100 * TOTAL_WEEKS
            lateStartPenaltyPaid += 100 * TOTAL_WEEKS
        }

        // Day 52/60, can't complete 10 logins
        if (purchaseDay > TOTAL_DAYS - 9) {
            // Paid loses 200 seasonal
            lateStartPenaltyPaid += 200
        }

        // Day 42/60, can't complete 20 logins
        if (purchaseDay > TOTAL_DAYS - 19) {
            // Paid loses 240 seasonal
            lateStartPenaltyPaid += 240
        }

        // Day 32/60, can't complete 30 logins
        if (purchaseDay > TOTAL_DAYS - 29) {
            // Paid loses 300 seasonal
            lateStartPenaltyPaid += 300
        }
    }
</script>

<div class="box">
    <strong>These numbers reflect Season 1, which had an event for increased rewards.</strong>

    <p>if you're gonna buy levels it's better to do them early on before consuming points that are automatically spent. you can buy levels, but you can't buy points, so once they are automatically used to rank up, you cannot get those points back.</p>

    <div>
        <input type="range" name="" id="" min="1" max={TOTAL_DAYS} bind:value={startDay} style="width: 300px" >
        Start day: {startDay}
    </div>

    <div>
        <input type="range" name="" id="" min="1" max={TOTAL_DAYS} bind:value={purchaseDay} style="width: 300px" >
        Purchase day: {purchaseDay}
    </div>
    <p>A season lasts {TOTAL_DAYS} days, or {TOTAL_WEEKS} weeks (the first day is weekly reset, so it's {TOTAL_WEEKS} instead of {TOTAL_WEEKS - 1}).</p>
    <p>Weekly quests can be completed at any time to get past weeks' season points. You cannot get the "normal rewards" from past weeks (typically Base Clay), but you can get the season points.</p>

    <h3>Free Pass</h3>
    <ul>
        <li>{FREE_DAILY_POINTS} points daily</li>
        <li>{FREE_WEEKLY_POINTS} points weekly</li>
        <li>{FREE_SEASONAL_POINTS} points seasonally</li>
    </ul>
    <p>Maximum points: {(FREE_DAILY_POINTS * (TOTAL_DAYS + 1 - startDay)) + (FREE_WEEKLY_POINTS * TOTAL_WEEKS) + FREE_SEASONAL_POINTS - lateStartPenaltyFree}</p>

    <h3>Advanced & Royal Pass</h3>
    <ul>
        <li>{FREE_DAILY_POINTS + PAID_DAILY_POINTS} points daily</li>
        <li>{FREE_WEEKLY_POINTS + PAID_WEEKLY_POINTS} points weekly</li>
        <li>{FREE_SEASONAL_POINTS + PAID_SEASONAL_POINTS} points seasonally</li>
    </ul>
    <p>Maximum points: {(FREE_DAILY_POINTS * (TOTAL_DAYS + 1 - startDay)) + ((PAID_DAILY_POINTS) * (TOTAL_DAYS + 1 - purchaseDay)) + ((FREE_WEEKLY_POINTS + PAID_WEEKLY_POINTS) * TOTAL_WEEKS) + FREE_SEASONAL_POINTS + PAID_SEASONAL_POINTS - lateStartPenaltyPaid}</p>

    <p>
        depending on how many points you want left over (in other words how many levels you want to buy), there are 2 options
        safe route: buy the levels as soon as you get the pass to guarantee maximum season points are preserved (not burned on leveling up)
        hmm i changed my mind route: buy the levels after hitting 70 for the same reason as above
        i suspect that might be why they stop auto leveling up
    </p>
    
</div>

<style lang="scss">
    .box {
        margin: 4rem 0;
    }
</style>