<script>
    import classesData from "./classes.json";
    import { page } from "$app/stores";
    import hue from "./classHues.json";

    export let currentClassId;
    export let selectedClasses;

    $: classes = classesData.map((job) => {
        return { ...job, showStats: job.id === currentClassId };
    });

    $: selectedClasses = classes.reduce((acc, job) => {
        if (job.id === parseInt($page.params.classId)) {
            job.showStats = true;
        }
        if (job.showStats || job.id === parseInt($page.params.classId)) {
            acc.push(job.internalName);
        }
        return acc;
    }, []);
</script>

<ul class="unstyled-list g-50" role="list">
    {#each classes as job}
        <li>
            <input
                type="checkbox"
                id="toggle-{job.internalName}-stats"
                bind:checked={job.showStats}
                disabled={job.id === currentClassId}
                class="visually-hidden"
            />
            <label class="flex g-50" for="toggle-{job.internalName}-stats">
                <span
                    class="switch"
                    style="--knob-hue: {hue[job.internalName]}"
                />
                {job.name}
            </label>
        </li>
    {/each}
</ul>

<style lang="scss">
    input:disabled {
        accent-color: red !important;
        background: red !important;
        color: red !important;
    }

    input:not(:disabled) + label:hover {
        color: var(--text1);

        .switch {
            filter: brightness(1.1);
            // background: hsla(var(--knob-hue, 210), 60%, 50%, 0.2);
        }
    }

    label {
        align-items: center;
        user-select: none;
        white-space: nowrap;
    }

    .switch {
        display: flex;
        width: 2em;
        aspect-ratio: 2/1;
        background: var(--surface3);
        position: relative;
        border-radius: 3rem;
        transition: background-color 0.15s ease;

        &::after {
            content: "";
            position: absolute;
            width: 50%;
            height: 100%;
            border-radius: 50%;
            background: gray;
            transform: translateX(100%);
            transition: all 0.15s ease;
        }
    }

    input:checked + label .switch {
        background: hsla(var(--knob-hue, 210), 60%, 50%, 0.3);
    }

    input:checked + label .switch::after {
        transform: translateX(0%);
        background: hsla(var(--knob-hue, 210), 60%, 50%, 1);
    }

    // input:disabled + label .switch {
    //     background: rgb(37, 37, 37);

    //     &::after {
    //         background: rgb(75, 75, 75);
    //     }
    // }
</style>
