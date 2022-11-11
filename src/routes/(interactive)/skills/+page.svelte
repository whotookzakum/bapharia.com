<script>
	let remainingPoints = 146;

	const skill = {
		skill_id: 106201,
		created_at: '2020-04-23 04:08:31',
		updated_at: '2020-04-23 04:08:31',
		skill_name: 55,
		skill_desc_array: [
			{
				desc: 346
			}
		],
		class_type: 6,
		skill_type: 8,
		skill_mastery_param: [
			{
				level: 1,
				use_skill_point: 1,
				condition_class_level: 12
			},
			{
				level: 2,
				use_skill_point: 2,
				condition_class_level: 19
			},
			{
				level: 3,
				use_skill_point: 3,
				condition_class_level: 25
			}
		],
		condition_skill_id: 0,
		condition_skill_level: 0,
		is_default_skill: false
	};

	const updateSkillState = (e) => {
		const skillId = parseInt(e.target.dataset.skillId);
		const allSkillLevels = skill.skill_mastery_param;
		const skillLevel = allSkillLevels.find(
			(skillLevel) => skillLevel.level === parseInt(e.target.dataset.skillLevel)
		);

		// const query = document.querySelectorAll(`[data-skill-id='${skill.skill_id}']`).forEach(checkbox => checkbox.checked = !checkbox.checked)

		const levelOfClickedItem = parseInt(e.target.dataset.skillLevel);
		// console.log(levelOfClickedItem)
		const query = document.querySelectorAll(`[data-skill-id='${skill.skill_id}']`);
		let pointCost = 0;

        query.forEach((item) => {
			const level = parseInt(item.dataset.skillLevel);
			if (level <= levelOfClickedItem) {
				pointCost += parseInt(item.dataset.pointCost)
			}
            if (level === levelOfClickedItem && !item.checked) {
                pointCost -= parseInt(item.dataset.pointCost)
            }
		});
        remainingPoints = 146 - pointCost

		query.forEach((item) => {
			const level = parseInt(item.dataset.skillLevel);
			// Check the preceeding levels
			if (level < levelOfClickedItem && !item.checked) {
				item.checked = true;
			}
			// Uncheck the subsequent levels
			else if (level > levelOfClickedItem && item.checked) {
				item.checked = false;
			}
		});

        

		const checkedNodes = document.querySelectorAll(`[data-skill-id='${skill.skill_id}']:checked`);

		const startingIndex = checkedNodes[checkedNodes.length - 1];
		// console.log(startingIndex)
		// console.log('STARTING INDEX: ' + startingIndex);

		// const targetIndex = allSkillLevels.indexOf(skillLevel);
		// console.log('TARGET INDEX: ' + targetIndex);
		// let sum = 0;

		// if (targetIndex >= startingIndex) {
		// 	for (let i = startingIndex; i <= targetIndex; i++) {
		// 		if (i >= 0) {
		//             sum += allSkillLevels[i].use_skill_point
		//         }
		// 	}
		// }
		// console.log('Total cost for this skill was: ' + sum);

		// console.log(pointCost)
		// const pointCost = parseInt(e.target.dataset.pointCost);
		// const canAffordCost = remainingPoints >= pointCost;
		// if (e.target.checked) {
		// 	canAffordCost ? (remainingPoints -= pointCost) : (e.target.checked = false);
		// } else if (!e.target.checked) {
		// 	remainingPoints += pointCost;
		// }
	};
</script>

<div>
	<span>{remainingPoints}</span>
</div>

<!-- SkillGroup component with Skill subcomponents -->

<div>
	<input
		type="checkbox"
		data-skill-id={skill.skill_id}
		data-skill-level={skill.skill_mastery_param[0].level}
		data-point-cost={skill.skill_mastery_param[0].use_skill_point}
		on:change={updateSkillState}
		id="skill1"
	/>
	<label for="skill1">Skill 1 (costs 1 point)</label>
</div>

<div>
	<input
		type="checkbox"
		data-skill-id={skill.skill_id}
		data-skill-level={skill.skill_mastery_param[1].level}
		data-point-cost={skill.skill_mastery_param[1].use_skill_point}
		on:change={updateSkillState}
		id="skill2"
	/>
	<label for="skill2">Skill 2 (costs 2 points)</label>
</div>

<div>
	<input
		type="checkbox"
		data-skill-id={skill.skill_id}
		data-skill-level={skill.skill_mastery_param[2].level}
		data-point-cost={skill.skill_mastery_param[2].use_skill_point}
		on:change={updateSkillState}
		id="skill3"
	/>
	<label for="skill3">Skill 3 (costs 3 points)</label>
</div>
