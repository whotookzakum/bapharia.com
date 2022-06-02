import './guide.scss';
import liquidmemory from '../assets/img/liquidmemory.svg';
import combat from '../assets/img/combat.svg';
import elements from '../assets/img/fire.png';
import fusion from '../assets/img/fusion.svg';
import dungeons from '../assets/img/dungeon.svg';
import luno from '../assets/img/luno.svg';
import msq from '../assets/img/msq.svg';
import options from '../assets/img/options.svg';
import buff from '../assets/img/buff.svg';

function GuideItem(props: any) {
    return (
        <li className={props.hide}>
            <img src={props.img} />
            <h3>{props.title}</h3>
        </li>
    );
}

// rewrite after all guides are compiled into a data file so that it automatically loops and fills
function GuideList() {
    return (
        <ul>
            <GuideItem title="Liquid Memories" img={liquidmemory} />
            <GuideItem title="Combat" img={combat} />
            <GuideItem title="Elements" img={elements} />
            <GuideItem title="Weapon Fusion" img={fusion} />
            <GuideItem title="Buffs &amp; Debuffs" img={buff} />
            <GuideItem title="Dungeons" img={dungeons} />
            <GuideItem title="Progression" img={luno} />
            <GuideItem title="Main Story" img={msq} />
            <GuideItem title="Options" img={options} />
            <GuideItem hide="hide" />
            <GuideItem hide="hide" />
            <GuideItem hide="hide" />
        </ul>
    );
}

function Guide(props: any) {
    return (
        <div id="page-guides" className="container">
            <h1>Guides</h1>
            <GuideList />

        </div>
    );
}

export default Guide;