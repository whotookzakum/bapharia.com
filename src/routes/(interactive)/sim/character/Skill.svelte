<script>
	export let classId;
	export let skillId;
	export let type;
	let bgSrc = 'UI_SkillTree_IconBG_Tactical_normal.png';
	let iconSrc = `Class${classId}/UI_PlayerSkill_${skillId}.png`;
	switch (type) {
		case 'ult':
			bgSrc = 'UI_SkillTree_IconBG_SP_normal.png';
			iconSrc = 'Common/UI_PlayerSkill_Special.png';
			break;
		case 'regular_main':
			bgSrc = 'UI_SkillTree_IconBG_Main_normal.png';
			iconSrc = 'Common/UI_PlayerSkill_Main.png';
			break;
		case 'regular_sub':
			bgSrc = 'UI_SkillTree_IconBG_Sub_normal.png';
			iconSrc = 'Common/UI_PlayerSkill_Sub.png';
			break;
	}
</script>

<div class={`skill ${type}`}>
	<img class="skill-icon" src={`/UI/Icon/PlayerSkill/${iconSrc}`} alt={`Skill ${skillId}`} />
	<img src={`/UI/SkillTree/${bgSrc}`} alt="Skill Background" />
	<kbd class="key-binding">[Q]</kbd>
</div>

<style lang="scss">
	.skill {
		width: 88px;
		height: 88px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;

		// Black shadow
		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
			height: 64px;
			width: 64px;
			background: black;
			border-bottom-left-radius: 50%;
			border-bottom-right-radius: 50%;
		}
	}

	.tactical {
		margin: 0 calc(-1 * 88px * 0.25 / 2);
		transform: scale(0.75);
	}

	.skill-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -40%);
		filter: invert(1);
	}

	kbd.key-binding {
		margin-top: -8px;
		font: inherit;
		font-size: var(--step--1);
	}
</style>
