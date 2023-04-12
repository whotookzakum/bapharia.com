<script>
	export let data

	// $: ({ Info } = data)

	// $: console.log($Info.data)

	$: ({MyList} = data)

	$: console.log($MyList.data)
</script>

<div>asdasd</div>
