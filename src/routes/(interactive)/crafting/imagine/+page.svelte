<script>
	import ItemList from '$lib/components/crafting/ItemList.svelte';
	import ImagineDetails from './ImagineDetails.svelte';

	export let data;
	let imagines = data.imagines.filter(imagine => imagine.imagine_type === 1)

	// .filter(item => item.imagine_type === 0)

	


	// const imagineStrings = allText.find((category) => category.name === 'master_imagine_text');



	// const supportImagineIds = [2, 10];
	// const healImagineIds = [1, 11, 18];

	// $: imagines = imagineData.map((imagine) => {
	// 	const stringHolder = imagineStrings.texts.find((obj) => obj.id === imagine.imagine_name) || {};
	// 	const skillDescHolder =
	// 		imagineStrings.texts.find((obj) => obj.id === imagine.imagine_desc) || {};
	// 	// const recipeData = imagineRecipes.find((obj) => obj.imagin_id === imagine.id) || {};

	// 	let imgSrc = `Imagine/Active/UI_Icon_${imagine.id}.png`


	// 	const skillName = skillDescHolder.text.split('【').pop().split('】')[0];
	// 	let skillType = '攻撃タイプ';

	// 	if (supportImagineIds.includes(imagine.id)) {
	// 		skillType = '補助タイプ';
	// 	}
	// 	if (healImagineIds.includes(imagine.id)) {
	// 		skillType = '回復タイプ';
	// 	}

	// 	if (imagineType === 0) {
	// 		skillType = "　";
	// 		imgSrc = `Imagine/Passive/UI_Icon_${imagine.id}.png`
	// 	}

	// 	return {
	// 		...imagine,
	// 		name: stringHolder.text,
	// 		skillName: skillName,
	// 		type: skillType,
	// 		// reqAR: recipeData.adventurer_rank,
	// 		imgSrc: imgSrc
	// 	};
	// }).filter((imagine) => imagine.imagine_type === imagineType);

	// const getImagineById = (id) => {
	// 	const currentImagine = imagines.find((imagine) => imagine.id === id);
	// 	if (currentLevel > currentImagine.imagine_max_level) {
	// 		currentLevel = currentImagine.imagine_max_level;
	// 	}
	// 	const level_data = imagineLevels.filter(
	// 		(param) => param.pattern_id === currentImagine.param_type
	// 	);
	// 	return { ...currentImagine, level_data };
	// };
	// $: imagineType = 1;
	// let currentLevel = 1;
	// $: data = getImagineById($currentImagineId);
	// $: currentLevelData = data.level_data.find((levelData) => levelData.level === currentLevel);

	console.log(imagines);
</script>

<div>
	<!-- <input type="radio" name="imagine-type" id="battle-imagine" value={1} bind:group={imagineType} />
	<label for="battle-imagine">Battle Imagine</label>
	<input type="radio" name="imagine-type" id="enhance-imagine" value={0} bind:group={imagineType} />
	<label for="enhance-imagine">Enhance Imagine</label> -->

	<div style="display: flex; gap: 1rem;">
		<ItemList items={imagines} />
		<ImagineDetails imagine={imagines[50]} />
		<!-- <div style="width: 900px">
			<h2 class="item-name">{data.name}</h2>
			<div class="item-details" class:level-not-initial={currentLevel > 1}>
				<div>
					<div class="stat-adjustable" style="display: block">
						Current Level: <b>{currentLevel}</b>
					</div>
					<input
						type="range"
						name="level-selector"
						id="level-selector"
						bind:value={currentLevel}
						min={1}
						max={data.imagine_max_level}
					/>
				</div>
				<div class="stat-row">
					<div class="stat item-level">
						初期
						<i>Lv. </i>
						<span>
							<b>1~1</b>
							(Max Lv: <b>{data.imagine_max_level}</b>)
						</span>
					</div>
				</div>
				<hr />
				<div class="stat-row">
					<div class="stat element">
						属性 <b>{data.attribute === 0 ? 'ー' : data.attribute}</b>
					</div>
					<div class="stat" />
					<div class="stat">
						インターバル: <b>CD Sec.</b>
					</div>
				</div>
				<hr />
				<div class="stat-row-grid">
					<div class="stat skill-name">
						スキル <span>{data.skillName} ／ {data.type}</span>
					</div>
					<div class="stat-adjustable">
						効果値 <b>{currentLevelData.skill}</b>
					</div>
				</div>
				<hr />
				<div class="stat-row-grid">
					<div class="stat ability-name">
						アビリティ名 <span>????</span>
					</div>
					<div class="stat">
						効果値 <b>????</b>
					</div>
				</div>
				<hr />
				<div class="stat-row">
					<ul class="stats-wrapper">
						<li class="stat-adjustable">
							筋力 <b>+{currentLevelData.str}</b>
						</li>
						<li class="stat-adjustable">
							知力 <b>+{currentLevelData.int}</b>
						</li>
						<li class="stat-adjustable">
							最大HP <b>+{currentLevelData.hp}</b>
						</li>
						<li class="stat-adjustable">
							耐久力 <b>+{currentLevelData.vit}</b>
						</li>
						<li class="stat-adjustable">
							精神力 <b>+{currentLevelData.mnd}</b>
						</li>
						<li class="stat-adjustable">
							攻撃力 <b>+{currentLevelData.offensive_power}</b>
						</li>
						<li class="stat-adjustable">
							器用さ <b>+{currentLevelData.dex}</b>
						</li>
					</ul>
				</div>
			</div>
		</div> -->
	</div>
</div>


