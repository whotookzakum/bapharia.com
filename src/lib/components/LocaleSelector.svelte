<!-- <script>
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
</div> -->

<script>
	let lang = "en";
</script>

<menu class="lang-selector">
	<li class={lang === 'en' ? 'selected' : ''} on:click={() => (lang = 'en')}>
		<img
			src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-kingdom_1f1ec-1f1e7.png"
			alt=""
		/>
	</li>
	<li class={lang === 'ja' ? 'selected' : ''} on:click={() => (lang = 'ja')}>
		<img
			src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-japan_1f1ef-1f1f5.png"
			alt=""
		/>
	</li>
	<li class={lang === 'br' ? 'selected' : ''} on:click={() => (lang = 'br')}>
		<img
			src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png"
			alt=""
		/>
	</li>
</menu>

<style lang="scss">
	.lang-selector {
		list-style: none;
		padding: 0;
		position: absolute;
		top: 0;
		cursor: pointer;

		img {
			display: block;
			max-width: 32px;
		}

		li {
			display: none;
			padding: 0.5em;

			&:hover {
				background: var(--surface2);
			}
		}

		li.selected {
			display: block;
		}

		&:hover {
			li {
				display: block;
			}
		}
	}
</style>
