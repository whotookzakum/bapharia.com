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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aperiam laudantium quibusdam earum perspiciatis deleniti, iste accusamus incidunt vitae enim aliquid voluptas quis voluptatibus officiis? Impedit magni tempore illum. Ipsam.
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
      </main>


    </div>
  )
}
