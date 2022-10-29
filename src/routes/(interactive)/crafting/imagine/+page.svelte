<script>
	import imagineData from '../../../../lib/jsondata/imagine.json';
	import allText from '../../../../lib/jsondata/texts.json';
	import ItemList from '../../../../lib/components/ItemList.svelte';
	import imagineLevels from '../../../../lib/jsondata/imagine/param_level.json';
	import { currentImagineId } from '../../../../lib/stores';

	const imagineStrings = allText.find((category) => category.name === 'master_imagine_text');

	const imagines = imagineData.map((imagine) => {
		const stringHolder = imagineStrings.texts.find((string) => string.id === imagine.imagine_name);
		if (stringHolder) {
			return {
				...imagine,
				name: stringHolder.text,
				imgSrc: `Imagine/Active/UI_Icon_${imagine.id}.png`
			};
		}
		return imagine;
	});

	const getImagineById = (id) => {
		const currentImagine = imagines.find(imagine => imagine.id === id)
		const level_data = imagineLevels.filter((param) => param.pattern_id === currentImagine.param_type);
		return { ...currentImagine, level_data }
	}

	$: currentLevel = 1

	const updateCurrentLevel = (e) => {
		
		currentLevel = e.target.value
		console.log(currentLevel);
	};

	$: data = getImagineById($currentImagineId)
	$: currentLevelData = data.level_data.find((levelData) => levelData.level === currentLevel)
</script>

<div style="display: flex; gap: 17rem; padding-top: 5rem;">
	<ItemList items={imagines} />

	<div>
		<input
			type="range"
			name="level-selector"
			id="level-selector"
			value="1"
			min="1"
			max={data.imagine_max_level}
			on:input={updateCurrentLevel}
		/>
		<h3>Current Level: {currentLevel}</h3>
		<h4>Name: {data.name}</h4>
		<p>初期Lv. 1~1 (Max Lv: {data.imagine_max_level})</p>
		<p>属性 {data.attribute}</p>
		<p>インターバル X Sec.</p>
		<p>スキル</p>
		<p>効果値 {currentLevelData.skill}</p>
		<p>アビリティ名 ????</p>
		<p>効果値 ????</p>
		<p>筋力 {currentLevelData.str}</p>
		<p>耐久力 {currentLevelData.vit}</p>
		<p>器用さ {currentLevelData.dex}</p>
		<p>知力 {currentLevelData.int}</p>
		<p>精神力 {currentLevelData.mnd}</p>
		<p>最大HP {currentLevelData.hp}</p>
		<p>攻撃力 {currentLevelData.offensive_power}</p>
	</div>
</div>
