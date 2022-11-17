<script>
	import ClassWeapon from './ClassWeapon.svelte';
	import SkillPalette from './SkillPalette.svelte';
	import StatsColumn from './StatsColumn.svelte';
</script>

<div class="character-model"/>
<StatsColumn />
<div class="build-wrapper">
	<ClassWeapon />
	<SkillPalette />
</div>


<style lang="scss">
	.character-model {
		min-width: 300px;
	}
	.build-wrapper {
		display: flex;
		flex-direction: column;
		flex: 1;
		background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.5) 60%, transparent 220%);
		overflow: visible;
		margin-left: -90px;
		z-index: -1;
		padding-left: calc(var(--space-xs) + 90px);
		padding-right: var(--space-xs);
	}
</style>