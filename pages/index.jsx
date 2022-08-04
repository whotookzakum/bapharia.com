import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { IconBrandTwitter } from '@tabler/icons';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
    return (
        <div id="content">
            <Head>
                <title>Home | Bapharia</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="News, Guides, and Interactive Demos for the online game BLUE PROTOCOL." />
            </Head>
            <Navbar />
            <main>
                <header className="hero-banner">
                    <h1>Bapharia</h1>
                    <h3>A free resource for the online game BLUE PROTOCOL.</h3>
                </header>

                <h2>Latest News</h2>
                <section className={styles["latest-news-wrapper"]}>
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

                <section className={styles.credits}>
                    <h3>Translations</h3>
                    <ul>
                        <li>
                            Rubens "Ryuno" Moreira (Brazilian Portuguese)<br />
                            Sniper Mask (Russian)<br />
                            Vadimhalo (Russian)
                        </li>
                    </ul>
                    <hr />
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
                    <hr />
                    <h3>References</h3>
                    <ul>
                        <li>
                            <a
                                href="https://docs.google.com/document/d/1zLKK_ZkcXPyNR3yLarz1r2LOjcwi200vLeBDwXIFBF0/edit" target="_blank" rel="noopener noreferrer nofollow">
                                beater's guide
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://h1g.jp/blue-protocol/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                h1g
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://blue-protocol.info"
                                target="_blank" rel="noopener noreferrer nofollow">
                                info database
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://burupuro-kouryaku.com/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                ranpon
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://bonyou.info/blue-protocol/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                bonyou
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://baskmedia.jp/blue-protocol/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                kanbatch
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://asterleeds.com/maps"
                                target="_blank" rel="noopener noreferrer nofollow">
                                asterleeds
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.the-luno.com/blue-protocol/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                the luno
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://gamebattleroyal.com/blue-protocol-zokusei/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                tokka
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://msfl.tokyo/blue-protocol-imagine#toc3"
                                target="_blank" rel="noopener noreferrer nofollow">
                                msfl
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://blueprotocol-db.com/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                jp database
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://blueprotocol.swiki.jp/"
                                target="_blank" rel="noopener noreferrer nofollow">
                                jp wiki
                            </a>
                        </li>
                        <li>0wl's data</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
