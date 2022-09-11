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
            </main>
        </div>
    )
}
