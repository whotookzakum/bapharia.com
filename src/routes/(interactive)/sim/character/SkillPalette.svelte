<script>
	import Skill from "./Skill.svelte";
</script>

<section id="skill-palette">
	<div class="box-title">スキルパレット</div>
	<div class="info-box">
		<section class="tactical-skills">
			<header class="category-title">タクティカルスキル</header>
		</section>
		<section class="ult-skill">
			<header class="category-title">ULTスキル</header>
			<Skill/>
		</section>
		<section class="battle-imagine">
			<header class="category-title">バトルイマジン</header>
		</section>
		<section class="regular-skills">
			<header class="category-title">レギュラースキル</header>
		</section>
	</div>
</section>

<style lang="scss">
	#skill-palette {
		max-width: 1000px;
	}

	.box-title {
		color: rgb(48, 68, 82);
		font-weight: 600;
		font-size: var(--step-1);
		text-align: center;
		margin-top: var(--space-xs);
		margin-bottom: var(--space-3xs);
	}

	.info-box {
		display: flex;
		gap: 1rem;
		padding: var(--space-xs);
		background: rgba(0, 0, 0, 0.25);

		section {
			flex: 1;
		}
	}

	header.category-title {
		text-align: center;
		font-weight: 600;
		color: rgb(13, 41, 46);
		padding-bottom: 0.2rem;
		border-bottom: 1px solid rgb(21, 41, 40);
	}
</style>
