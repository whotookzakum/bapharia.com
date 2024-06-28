<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import "./events.scss";
    import doc from "./events.md";
    // TODO add calendar for events

    // Option 1: show all items for the selected date
    // Option 2: show only selected item

    const days = new Date(0).getDate();
</script>

<MetaTags
    title={`Events — Bapharia`}
    description={`List of all ongoing events in BLUE PROTOCOL.`}
/>

<h1>Events</h1>

<div class="calendar-wrapper box">
    <header>
        <h3>July 2023</h3>
    </header>
    <div class="week grid">
        {#each [9,10,11,12,13,14,15] as day, index}
            <input class="visually-hidden" type="radio" name="calendar" id="july-{day}" checked={day === new Date().getDate()} />
            <label for="july-{day}" class="day box hover grid gap-1" style="grid-column: {index+1}">
                <div class="date">{day}</div>
                <ul class="unstyled-list gap-1" role="list">
                    <li class="item time-attack">Time Attack: Dragon Claw Valley</li>
                    <li class="item">Time Attack: Dragon Claw Valley</li>
                    <li class="item">Time Attack: Dragon Claw Valley</li>
                </ul>
            </label>
        {/each}
    </div>
</div>

<!-- <svelte:component this={doc} /> -->

<style lang="scss">
    .calendar-wrapper {
        background: var(--surface1);
    }

    .different-month {
        color: var(--text2);
    }

    .week {
        // grid-template-columns: repeat(7, 1fr);
        grid-template-columns: subgrid;
        gap: 1rem;
    }

    .day {
        overflow: unset;
    }

    input:checked + .day {
        background: var(--surface2);

        .date {
            color: var(--accent1);
        }
    }

    .item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: var(--step--1);
        line-height: 1.4;

        border-radius: 1rem;
        background: var(--surface3);
        padding: 0.25rem 0.5rem;
    }

    .event {
        background: green;
    }

    .time-attack, .score-attack {
        background: crimson;
    }

    h3 {
        margin-top: 0;
        line-height: 1;
        margin-bottom: 1rem;
    }
</style>
