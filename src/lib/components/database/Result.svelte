<div>
    <span class="component-label">Result</span>
    <div class="box">
        <header>
            <img
                src={`/images/axe1.png`}
                alt="Item Icon"
                width="64"
                height="64"
            />
            <h3>Beginner's Axe <span>(Lv. 10)</span></h3>
            <span>Weapon</span>
            <span>ID: 7020109</span>
            <img
                class="element-img"
                src="/images/elements/UI_IconAttribute_1.png"
                alt="Fire"
                width="32"
                height="32"
            />
        </header>
        <dl>
            <div>
                <!-- <dt>Weapon Level</dt>
                <dd>Lv. 10</dd>
                
                <dt>Element</dt>
                <dd>Fire</dd> -->

                <dt class="component-label">Stats</dt>
                <dd>ATK <strong>271</strong></dd>
                <dd>Crit Rate <strong>11%</strong></dd>
                <dd>STR <strong>99</strong></dd>
                <dd>VIT <strong>100</strong></dd>
                <dd>DEX <strong>21</strong></dd>
                <dd>INT <strong>81</strong></dd>
                <dd>MND <strong>49</strong></dd>
            </div>
            <div>
                <dt class="component-label">Special Effects</dt>
                <dd>Ogre Killer <strong>9%~11% / 12%~18%</strong></dd>
                <dd>Demihuman Killer <strong>9%~11% / 12%~18%</strong></dd>
                <dd>Goblin Killer <strong>9%~11% / 12%~18%</strong></dd>

                <!-- <dt>Sockets</dt>
                <dd>1~4</dd> -->

                <dt class="component-label">Crafting Recipe</dt>
                <dd>Dragon Bone <strong>x13</strong></dd>
                <dd>Drip Stone <strong>x4</strong></dd>
                <dd>Suzuki Ore <strong>x1</strong></dd>
                <dd>Luno <strong>20,000</strong></dd>
            </div>
        </dl>
        <div class="model-viewer"></div>
    </div>
</div>

<style lang="scss">
    header {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        column-gap: 1rem;
        padding-bottom: 1rem;
        line-height: 1.4;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        position: relative;

        img {
            grid-row: span 3;
        }

        h3 {
            margin: 0;
            font-size: var(--step-1);
        }

        span {
            color: var(--text2);
            font-size: var(--step--1);
        }

        .element-img {
            position: absolute;
            right: 0;
            top: 0;
            opacity: 0.5;
        }
    }

    dl {
        grid-template-columns: 20ch auto;
        max-inline-size: none;

        dd {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
        }

        * {
            margin: 0;
        }
    }

    .model-viewer {
        background: black;
        height: 300px;
    }
</style>
