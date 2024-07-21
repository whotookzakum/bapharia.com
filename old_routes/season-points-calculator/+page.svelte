<script>
    import SeasonPointsCalculator from "./SeasonPointsCalculator.svelte";
    import StickyNote from "$lib/components/StickyNote.svelte";
</script>

<SeasonPointsCalculator />

<div style="margin: auto">
    <h2>About the Season Points Calculator</h2>
    <StickyNote type="note">
        In this calculator, "missing a day" means that you did not login that
        day. Points from daily quests are deducted, as well as points from
        "Login X Days" weekly and seasonal quests.
    </StickyNote>

    <h3>Season Points</h3>
    <p>
        Season points can be used to rank up your Season Pass (100 points per
        rank), or spent at the Season Point Store. Your
        pass will automatically rank up to 70, after which you will have to
        manually rank it up.
    </p>
    <StickyNote type="caution">
        Items in the Season Point Store have minimum rank requirements to purchase them, such as Rank 70 or Rank 100.
        The Free Pass maxes at Rank 60.
    </StickyNote>
    <p>
        Weekly quests can be completed at any time to get past weeks' season
        points. You cannot get the "normal rewards" from past weeks (typically
        Base Clay), but you can get the season points.
    </p>

    <h4>Getting Extra Points</h4>
    <p>
        The Royal Pass grants 25 Ranks when purchased, effectively saving you
        from spending 2500 Season Points to Rank Up.
    </p>
    <p>
        If you don't have enough points leftover, you may consider using Rose
        Orbs to buy ranks. For every 30 Rose Orbs you spend to rank up, you save
        100 Season Points.
    </p>
</div>
