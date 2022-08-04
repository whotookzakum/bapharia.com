import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from '../../styles/pages/guides.module.scss';
import { getAllGuideIds, getGuideData } from '../../lib/guides';
import Date from "../../components/Date";
import AnchorJS from 'anchor-js';
import { useEffect } from "react";



export async function getStaticProps({ params }) {
    const guideData = await getGuideData(params.id);
    return {
        props: {
            guideData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllGuideIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Guide({ guideData }) {
    useEffect(() => {
        const anchors = new AnchorJS();
        anchors.options.visible = 'touch';
        anchors.add('h2');
        anchors.add('h3');
    })
    return (
        <div id="content">
            <Head>
                <title>{guideData.title} | Bapharia</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Guides for the online game BLUE PROTOCOL." />
            </Head>
            <Navbar />
            <main>
                <header className="hero-banner">
                    <h1>{guideData.title}</h1>
                    <h3>Last updated <Date dateString={guideData.date} /></h3>
                </header>
                <article className={styles.guide} dangerouslySetInnerHTML={{ __html: guideData.contentHtml }} />
            </main>
        </div>
    )
}