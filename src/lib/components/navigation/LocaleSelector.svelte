<script>
	import { userLocale } from "$lib/stores";
	import Icon from "@iconify/svelte";
	import NavModal from "./NavModal.svelte";
	import Tooltip from "../FloatingUI/Tooltip.svelte";

	let showing = false;

	function closeModal(e) {
		$userLocale = e.target.value;
		showing = false;
	}
</script>

<div style="position: relative;">
	<Tooltip inline hide={showing} animateOut={false} reverseAnimation>
		<button
			class="nav-button"
			aria-label="Open language selector"
			aria-live="polite"
			on:click={() => {
				showing = !showing;
			}}
		>
			<!-- "mingcute:translate-2-line" -->
			<Icon icon="material-symbols:language" />
		</button>
		<svelte:fragment slot="tooltip">Language</svelte:fragment>
	</Tooltip>

	{#if showing}
		<NavModal
			bind:group={$userLocale}
			inputCallback={closeModal}
			data={[
				{
					title: "English",
					value: "en",
				},
				{
					title: "日本語",
					value: "ja",
				},
			]}
		/>
	{/if}
</div>