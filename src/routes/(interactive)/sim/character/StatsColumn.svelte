<script>
	const charData = {
		name: 'fukuzaki',
		title: '最強の冒険者',
		class: 'ツインストライカー',
		level: 10,
		exp: 0,
		battleScore: 240,
		stats: {
			base: [
				{
					name: '筋力',
					value: 65
				},
				{
					name: '耐久力',
					value: 62
				},
				{
					name: '器用さ',
					value: 64
				},
				{
					name: '知力',
					value: 60
				},
				{
					name: '精神力',
					value: 61
				}
			],
			attack: [
				{
					name: '攻撃力',
					value: 136
				},
				{
					name: '会心率',
					value: 2
				},
				{
					name: '会心力',
					value: 18
				}
			],
			defence: [
				{
					name: '防御力',
					value: 65
				},
				{
					name: '回復力',
					value: 62
				},
				{
					name: '属性耐性値',
					value: 0
				}
			]
		}
	};
</script>

<div class="stats-column">
	<div class="stat-group player-name">
		<div class="title">{charData.title}</div>
		<strong class="name">{charData.name}</strong>
	</div>

	<div class="stat-group class">
		<div class="box-title">クラス</div>
		<div class="top">
			<img src="/images/Class/UI_IconClass_07.png" alt="Class Icon" />
			<div class="text-data">
				<div class="name">{charData.class}</div>
				<strong class="level">Lv. {charData.level}</strong>
			</div>
		</div>
		<div class="bottom">
			<div id="exp-meter" />
			<label for="exp-meter">726/26920</label>
		</div>
	</div>

	<div class="stat-group battle-score">
		<div class="box-title">バトルスコア</div>
		<div class="stat">
			<strong>{charData.battleScore}</strong>
		</div>
	</div>

	{#each Object.entries(charData.stats) as statGroup}
		<div class={`stat-group ${statGroup[0]}`}>
			<div class="box-title">
				<strong>{statGroup[0]}</strong>
			</div>
			<ul class="stats-list">
				{#each statGroup[1] as stat}
					<li class="stat">
						<span>{stat.name}</span>
						<strong>{stat.value}</strong>
					</li>
				{/each}
			</ul>
		</div>
	{/each}

	<div class="stat-group hp-st">
		<div class="hp-group">
			<label for="hp-meter">
                <span>HP</span>
                <span>672/672</span>
            </label>
			<div id="hp-meter" />
		</div>
        <div class="st-group">
            <label for="st-meter">
                <span>ST</span>
                <span>105/105</span>
            </label>
			<div id="st-meter" />
        </div>
	</div>
</div>

<style lang="scss">
	.stats-column {
		max-width: 280px;
	}

	.stat-group {
		background: rgba(0, 0, 0, 0.1);
		margin: 0.5rem 0;
	}

	.box-title {
		text-transform: capitalize;
		padding: 0.2rem var(--space-2xs);
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), transparent);
	}

	ul.stats-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		padding: var(--space-3xs) var(--space-s);
		border-left: 6px solid rgba(0, 0, 0, 0.4);
	}

	.stat-group.attack .stat:not(:first-of-type) {
		position: relative;

		&::after {
			content: '%';
			position: absolute;
			right: 0;
			margin-right: -1.8ch;
			margin-top: 0.6ch;
			font-weight: bold;
			font-size: var(--step--2);
		}
	}

	.stat {
		display: flex;
		justify-content: space-between;
	}

	.player-name {
		padding: var(--space-3xs) var(--space-s);

		.title {
			font-size: var(--step--1);
		}

		// Underline
		.title::after {
			content: '';
			height: 1px;
			width: 100%;
			display: block;
			margin: var(--space-3xs) 0;
			border-radius: 50%;
			filter: drop-shadow(0 0 1px var(--color, rgba(255, 255, 255, 0.8)));
			background: linear-gradient(
				90deg,
				transparent,
				var(--color, rgba(255, 255, 255, 0.8)),
				transparent
			);
			transition: filter 0.2s ease;
		}
	}

	.class {
		.top {
			padding: 0 var(--space-s);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		img {
			margin-left: -0.5rem;
		}

		.text-data {
			text-align: right;

			.name {
				font-size: var(--step--1);
			}

			.level {
				font-size: var(--step-2);
			}
		}

		.bottom {
			accent-color: gray;
			padding: 0 var(--space-s);
			padding-bottom: var(--space-3xs);

			#exp-meter {
				--percent: 2.697%;
				width: 100%;
				height: 2px;
				background: rgb(117, 117, 117);
				margin: var(--space-3xs) 0;
				position: relative;
				overflow: hidden;

				&::after {
					content: '';
					background: white;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					position: absolute;
					transform: translateX(calc(-100% + var(--percent, 30%)));
				}
			}

			label[for='exp-meter'] {
				display: block;
				text-align: right;
				font-size: var(--step--1);
				font-weight: 500;
			}
		}
	}

	.battle-score .stat {
		padding: var(--space-3xs) var(--space-s);
		justify-content: end;
		font-size: var(--step-1);
	}

	.hp-st {
        --color: #29fdac;
		padding: var(--space-2xs);
        padding-bottom: var(--space-xs);
		display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .hp-group, .st-group {
            color: var(--color);
        }

        label {
            font-weight: 600;
            font-size: var(--step--1);
            display: flex;
            // justify-content: space-between;
            gap: 1.5rem;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

		#hp-meter,
		#st-meter {
			width: 100%;
			height: 6px;
			background: var(--color);
			border-radius: 2px;
			box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.5);
		}

		.st-group {
			--color: #eba736;
		}
	}
</style>
