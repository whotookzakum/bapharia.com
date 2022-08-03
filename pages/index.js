import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { IconBrandTwitter } from '@tabler/icons';

export default function Home() {

  return (
    <div id="content">
      <Navbar />
      <main>
        <h1 style={{ fontFamily: "Skip Std", marginBottom: "0" }}>Bapharia</h1>
        <h2 style={{ fontFamily: "Skip Std", color: "lightgray", marginTop: "0" }}>A free resource for the online game BLUE PROTOCOL.</h2>
        {/* <h2>Header 2</h2>
        <h3>Header 3</h3> */}
        {/* <p style={{ fontFamily: "Century Gothic Pro" }}>
          日本テレビ放送網株式会社（にほんテレビほうそうもう、英: Nippon Television Network Corporation）は、日本テレビホールディングスの連結子会社で、関東広域圏を放送対象地域としてテレビジョン放送を行う特定地上基幹放送事業者。日本国内で最初の民放テレビ局として開局した。一般的には日本テレビ（にほんテレビ）または日テレ（にっテレ）と呼ばれる。
        </p>
        <hr />
        <p style={{ fontFamily: "Pearl Std", lineHeight: "2" }}>
          日本テレビ放送網株式会社（にほんテレビほうそうもう、英: Nippon Television Network Corporation）は、日本テレビホールディングスの連結子会社で、関東広域圏を放送対象地域としてテレビジョン放送を行う特定地上基幹放送事業者。日本国内で最初の民放テレビ局として開局した。一般的には日本テレビ（にほんテレビ）または日テレ（にっテレ）と呼ばれる。
        </p>
        <hr />
        <p>
          日本テレビ放送網株式会社（にほんテレビほうそうもう、英: Nippon Television Network Corporation）は、日本テレビホールディングスの連結子会社で、関東広域圏を放送対象地域としてテレビジョン放送を行う特定地上基幹放送事業者。日本国内で最初の民放テレビ局として開局した。一般的には日本テレビ（にほんテレビ）または日テレ（にっテレ）と呼ばれる。
        </p>
        <hr />
        <p style={{ fontFamily: "Stone Informal", lineHeight: "2" }}>
          日本テレビ放送網株式会社（にほんテレビほうそうもう、英: Nippon Television Network Corporation）は、日本テレビホールディングスの連結子会社で、関東広域圏を放送対象地域としてテレビジョン放送を行う特定地上基幹放送事業者。日本国内で最初の民放テレビ局として開局した。一般的には日本テレビ（にほんテレビ）または日テレ（にっテレ）と呼ばれる。
        </p>
        <hr /> */}


        <h2>Latest News</h2>
        <section className="latest-news-wrapper">
          <div className="card">
            <header>
              <span>August 7</span>
              <a href="#">Website Maintenance</a>

            </header>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aperiam laudantium quibusdam earum perspiciatis deleniti, iste accusamus incidunt vitae enim aliquid voluptas quis voluptatibus officiis? Impedit magni tempore illum. Ipsam dolor sit amet consectetur, adipisicing elit. Molestiae aperiam laudantium quibusdam earum perspici
          </div>
          <div className="card">
            <header>
              <span>August 2</span>

              <a href="#">
                <IconBrandTwitter size={36} // set custom `width` and `height`
                  fill="dodgerblue"
                  stroke={0} />
                @BLUEPROTOCOL_JP
              </a>
            </header>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aperiam laudantium quibusdam earum perspiciatis deleniti, iste accusamus incidunt vitae enim aliquid voluptas quis voluptatibus officiis? Impedit magni tempore illum. Ipsam.
          </div>
          <div className="card">
            <header>
              <span>July 27</span>
              <a href="#">Tweet</a>
            </header>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aperiam laudantium quibusdam earum perspiciatis deleniti, iste accusamus incidunt vitae enim aliquid voluptas quis voluptatibus officiis? Impedit magni tempore illum. Ipsam.
          </div>
        </section>

        <h3>Created By</h3>
        <ul>
          <li>Zakum</li>
        </ul>

        <h3>Special Thanks</h3>
        <ul>
          <li>Tan</li>
          <li>Santa</li>
          <li>Maru</li>
          <li>Sigmy</li>
          <li>Tiny</li>
          <li>Rhy</li>
          <li>Kazarune</li>
          <li>Masi</li>
          <li>Niko</li>
          <li>0wl</li>
          <li>SaintMorning</li>
        </ul>

        <h3>Translations</h3>
        <ul>
          <li>Rubens "Ryuno" Moreira (Brazilian Portuguese)</li>
          <li>Sniper Mask (Russian)</li>
          <li>Vadimhalo (Russian)</li>
        </ul>

        <h3>Game assets are property of</h3>
        <ul>
          <li>&copy; BANDAI NAMCO ONLINE INC.</li>
          <li>&copy; BANDAI NAMCO STUDIOS INC.</li>
        </ul>

        <h3>References</h3>
        <ul>
          <li>
            <a href="https://docs.google.com/document/d/1zLKK_ZkcXPyNR3yLarz1r2LOjcwi200vLeBDwXIFBF0/edit" target="_blank" rel="noopener noreferrer nofollow">beater's guide</a>
          </li>
          <li>
            <a href="https://h1g.jp/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">h1g</a>
          </li>
          <li>
            <a href="https://blue-protocol.info" target="_blank" rel="noopener noreferrer nofollow">info database</a>
          </li>
          <li>
            <a href="https://burupuro-kouryaku.com/" target="_blank" rel="noopener noreferrer nofollow">ranpon</a>
          </li>
          <li>
            <a href="https://bonyou.info/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">bonyou</a>
          </li>
          <li>
            <a href="https://baskmedia.jp/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">kanbatch</a>
          </li>
          <li>
            <a href="https://asterleeds.com/maps" target="_blank" rel="noopener noreferrer nofollow">asterleeds</a>
          </li>
          <li>
            <a href="https://www.the-luno.com/blue-protocol/" target="_blank" rel="noopener noreferrer nofollow">the luno</a>
          </li>
          <li>
            <a href="https://gamebattleroyal.com/blue-protocol-zokusei/" target="_blank" rel="noopener noreferrer nofollow">tokka</a>
          </li>
          <li>
            <a href="https://msfl.tokyo/blue-protocol-imagine#toc3" target="_blank" rel="noopener noreferrer nofollow">msfl</a>
          </li>
          <li>
            <a href="https://blueprotocol-db.com/" target="_blank" rel="noopener noreferrer nofollow">jp database</a>
          </li>
          <li>
            <a href="https://blueprotocol.swiki.jp/" target="_blank" rel="noopener noreferrer nofollow">jp wiki</a>
          </li>
          <li>
            <a href="#">0wl's data</a>
          </li>
        </ul>

        <h3>Community</h3>
                    <a className="icon" href="https://discord.gg/ZKwhn3a4yH" target="_blank" rel="noopener noreferrer nofollow">
                        {/* <FontAwesomeIcon icon={["fab", "discord"]} /> */} Discord
                    </a>
                    <a className="icon" href="https://youtube.com/zakum" target="_blank" rel="noopener noreferrer nofollow">
                        {/* <FontAwesomeIcon icon={["fab", "youtube"]} /> */} Youtube
                    </a>
                    <a className="icon" href="https://reddit.com/r/BlueProtocol" target="_blank" rel="noopener noreferrer nofollow">
                        {/* <FontAwesomeIcon icon={["fab", "reddit-alien"]} /> */} Reddit
                    </a>
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input type="hidden" name="hosted_button_id" value="JEYPMC4Z3QL3J" />
                        <input id="paypal-donation" type="submit" src="images/paypal.png" name="submit" title="Support the site via PayPal!" alt="Donate with PayPal button" />
                        <label htmlFor="paypal-donation" className="icon">
                          {/* <FontAwesomeIcon icon={["fab", "paypal"]} /> */} Paypal
                        </label>
                    </form>
                    <a className="icon" href="https://www.patreon.com/zakum" target="_blank" rel="noopener noreferrer nofollow">
                        {/* <FontAwesomeIcon icon={["fab", "patreon"]} /> */} Patreon
                    </a>

      </main>


    </div>
  )
}
