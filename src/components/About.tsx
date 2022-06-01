import React from "react";
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// About component
function About(props) {
    
    return (
        <>
            <div id="page-about-backdrop"></div>
            <article id="page-about show">
                <section>
                    <h3>Blue Protocol Fansite</h3>
                    Created by Zakum#3080
                </section>

                <section>
                    <h3>Special Thanks</h3>
                    tan, santa, maru, sigmy, tiny, rhy, kazarune, masi, niko, 0wl <br /><br />

                    <h3>Translations</h3>
                    Rubens "Ryuno" Moreira (pt br), Sniper Mask (ru), vadimhalo (ru) <br /><br />

                    <h3>Game assets are property of</h3>
                    © bandai namco online inc. <br />
                    © bandai namco studios inc. <br /><br />

                    <h3>References</h3>
                    <a href="https://docs.google.com/document/d/1zLKK_ZkcXPyNR3yLarz1r2LOjcwi200vLeBDwXIFBF0/edit" target="_blank" rel="noopener noreferrer nofollow">beater's guide</a>
                    <a href="https://h1g.jp/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">h1g</a>
                    <a href="https://blue-protocol.info" target="_blank" rel="noopener noreferrer nofollow">info database</a>
                    <a href="https://burupuro-kouryaku.com/" target="_blank" rel="noopener noreferrer nofollow">ranpon</a>
                    <a href="https://bonyou.info/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">bonyou</a>
                    <a href="https://baskmedia.jp/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">kanbatch</a>
                    <a href="https://asterleeds.com/maps" target="_blank" rel="noopener noreferrer nofollow">asterleeds</a>
                    <a href="https://www.the-luno.com/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">the luno</a>
                    <a href="https://gamebattleroyal.com/blue-protocol-zokusei/" target="_blank" rel="noopener noreferrer nofollow">tokka</a>
                    <a href="https://msfl.tokyo/blue-protocol-imagine#toc3" target="_blank" rel="noopener noreferrer nofollow">msfl</a>
                    <a href="https://blueprotocol-db.com/" target="_blank" rel="noopener noreferrer nofollow">jp database</a>
                    <a href="https://blueprotocol.swiki.jp/" target="_blank" rel="noopener noreferrer nofollow">jp wiki</a>
                    <a href="#">0wl's data</a>
                    <br /><br />

                    <h3>Community</h3>
                    <a className="icon" href="https://discord.gg/ZKwhn3a4yH" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={["fab", "discord"]} />
                    </a>
                    <a className="icon" href="https://youtube.com/zakum" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                    <a className="icon" href="https://twitter.com/hmyawp" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a className="icon" href="https://reddit.com/r/BlueProtocol" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
                    </a>
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input type="hidden" name="hosted_button_id" value="JEYPMC4Z3QL3J" />
                        <input id="paypal-donation" type="submit" src="images/paypal.png" name="submit" title="Support the site via PayPal!" alt="Donate with PayPal button" />
                        <label htmlFor="paypal-donation" className="icon"><FontAwesomeIcon icon={["fab", "paypal"]} /></label>
                    </form>
                    <a className="icon" href="https://www.patreon.com/zakum" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={["fab", "patreon"]} />
                    </a>
                </section>

                <section>
                    <h3>Enjoy some Blue Protocol Trivia!</h3>
                    <div id="trivia-wrapper">
                        <h4>Story</h4>
                        <h3>What is the name of the girl in charge of Adventurer Registration at the Frontiering Station?</h3>
                        <button>Divine Haven Hill</button>
                        <button>Soundless Foothills</button>
                        <button>Healing Boost Buff</button>
                        <button>Project Sky Blue</button>
                    </div>
                </section>
            </article>
        </>
    );

}

export default About;