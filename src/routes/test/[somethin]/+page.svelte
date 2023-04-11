<script>
	export let data

	$: ({ Info } = data)

	$: console.log($Info.data)
</script>

<div>asdasd</div>
