<script>
    import classesData from "../classes.json";
    import { page } from "$app/stores";

    export let currentClassId;
    export let selectedClasses;

    $: classes = classesData.map((job) => {
        return { ...job, showStats: job.id === currentClassId};
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

{#each classes as job}
    <label>
        <input type="checkbox" bind:checked={job.showStats} disabled={job.id === currentClassId} />
        {job.name}
    </label>
{/each}
