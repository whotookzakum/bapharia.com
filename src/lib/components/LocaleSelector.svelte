<script>
	import { createEventDispatcher } from 'svelte';
	export let value;
	const dispatch = createEventDispatcher();
	function handleLocaleChange(event) {
		event.preventDefault();
		dispatch('locale-changed', event.target.value);
	}
</script>

<div class="locale-selector">
	<div class="select">
		<select value={value} on:change={handleLocaleChange}>
			<option value="en">English</option>
			<option value="ja">日本語</option>
		</select>
	</div>
</div>

