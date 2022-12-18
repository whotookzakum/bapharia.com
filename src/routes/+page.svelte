<script>
	import PageFooter from '../lib/components/PageFooter.svelte';
	import Database from '$lib/components/database/Database.svelte';
	import Guides from './Guides.svelte';
	import InteractivePages from './InteractivePages.svelte';

	export let data
</script>

<main>
    <InteractivePages/>
	<Database/>
	<Guides data={data.guides} />
</main>
<PageFooter/>

<style lang="scss">
	main {
		max-width: 1400px;
        padding: 0 1em;
        margin: auto;
	}
</style>