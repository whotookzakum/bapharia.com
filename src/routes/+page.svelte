<script>
	import PageFooter from '../lib/components/PageFooter.svelte';
	import Database from '$lib/components/database/Database.svelte';
	import Guides from './Guides.svelte';
	import InteractivePages from './InteractivePages.svelte';

	export let data
</script>

<main>
	<h1>Bapharia</h1>
    <InteractivePages/>
	<Database/>
	<Guides data={data.guides} />
</main>
<PageFooter/>

<style lang="scss">
	main {
		max-width: 1400px;
        padding: 1em;
        margin: auto;
        margin-top: 20vh;
	}

    h1 {
        margin: auto;
		letter-spacing: normal;
		width: fit-content;
        font-size: var(--step-4);
    }
</style>