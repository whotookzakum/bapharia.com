<script>
	import imagineData from '../../../../lib/jsondata/imagine.json';
	import allText from '../../../../lib/jsondata/texts.json';
	import ItemList from '../../../../lib/components/ItemList.svelte';
	import imagineLevels from '../../../../lib/jsondata/imagine/param_level.json';
	import { currentImagineId } from '../../../../lib/stores';
	import imagineRecipes from '../../../../lib/jsondata/imagine/recepi.json';

	const imagineStrings = allText.find((category) => category.name === 'master_imagine_text');

	const supportImagineIds = [2, 10];
	const healImagineIds = [1, 11, 18];

	$: imagines = imagineData.map((imagine) => {
		const stringHolder = imagineStrings.texts.find((obj) => obj.id === imagine.imagine_name) || {};
		const skillDescHolder =
			imagineStrings.texts.find((obj) => obj.id === imagine.imagine_desc) || {};
		const recipeData = imagineRecipes.find((obj) => obj.imagin_id === imagine.id) || {};

		let imgSrc = `Imagine/Active/UI_Icon_${imagine.id}.png`


		const skillName = skillDescHolder.text.split('【').pop().split('】')[0];
		let skillType = '攻撃タイプ';

		if (supportImagineIds.includes(imagine.id)) {
			skillType = '補助タイプ';
		}
		if (healImagineIds.includes(imagine.id)) {
			skillType = '回復タイプ';
		}

		if (imagineType === 0) {
			skillType = ".";
			imgSrc = `Imagine/Passive/UI_Icon_${imagine.id}.png`
		}

		return {
			...imagine,
			name: stringHolder.text,
			skillName: skillName,
			type: skillType,
			reqAR: recipeData.adventurer_rank,
			imgSrc: imgSrc
		};
	}).filter((imagine) => imagine.imagine_type === imagineType);

	const getImagineById = (id) => {
		const currentImagine = imagines.find((imagine) => imagine.id === id);
		if (currentLevel > currentImagine.imagine_max_level) {
			currentLevel = currentImagine.imagine_max_level;
		}
		const level_data = imagineLevels.filter(
			(param) => param.pattern_id === currentImagine.param_type
		);
		return { ...currentImagine, level_data };
	};
	$: imagineType = 1;
	let currentLevel = 1;
	$: data = getImagineById($currentImagineId);
	$: currentLevelData = data.level_data.find((levelData) => levelData.level === currentLevel);
</script>

<div style="margin-top: 8rem">
	<input type="radio" name="imagine-type" id="battle-imagine" value={1} bind:group={imagineType} />
	<label for="battle-imagine">Battle Imagine</label>
	<input type="radio" name="imagine-type" id="inner-imagine" value={0} bind:group={imagineType} />
	<label for="inner-imagine">Inner Imagine</label>

	<div style="display: flex; gap: 1rem;">
		<ItemList items={imagines} />
		<h3>{imagineType}</h3>
		<div style="width: 900px">
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
		</div>
	</div>
</div>

<style lang="scss">
	$black: #000;
	$gray: #242424;
	$lightgray: #d0d0d0;
	$midgray: #333;
	$yellow: #ffce04;
	$highlight-hover: #fff;
	$highlight-active: #e7f837;

	.item-details {
		background: $lightgray;
		color: var(--text1-light);
		padding: var(--space-s);
	}

	.level-not-initial .stat-adjustable b {
		color: var(--accent);
	}

	.item-name {
		display: block;
		text-align: center;
		color: var(--text1-dark);
		padding: var(--space-3xs);
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.85), transparent);
	}

	.stat-row {
		display: flex;
		flex-wrap: wrap;

		& > * {
			flex: 1;
		}
	}

	.stat-row-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		.stat:first-of-type {
			grid-column: 1/3;
		}
	}

	.stats-wrapper {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		text-transform: uppercase;
	}

	.stat,
	.stat-adjustable {
		display: flex;
		justify-content: space-between;
		padding: var(--space-3xs) var(--space-m) var(--space-3xs) var(--space-xs);
		border-left: 6px solid $gray;

		b {
			font-size: var(--step-1);
			font-weight: 800;
		}
	}

	// Specific stat styles
	.item-level {
		display: block !important;

		i {
			font-style: normal;
			font-size: var(--step-1);
		}
		span {
			font-size: var(--step-2);
		}
		b {
			font-size: var(--step-3);
		}
	}

	.element,
	.skill-name,
	.ability-name {
		display: block;
	}

	.element b,
	.skill-name span,
	.ability-name span {
		font-size: initial;
		margin: 0 var(--space-s);
	}

	hr {
		margin: var(--space-3xs) 0;
		height: 2px;
		background: linear-gradient(90deg, transparent -10%, gray, transparent 110%);
		border-radius: 50%;
	}
</style>
