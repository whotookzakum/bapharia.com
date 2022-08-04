import Head from "next/head"
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { getSortedGuidesData } from '../../lib/guides';
import Date from "../../components/Date";

export async function getStaticProps() {
    const allGuidesData = getSortedGuidesData();
    return {
        props: {
            allGuidesData,
        },
    };
}

export default function Guides({ allGuidesData }) {
    return (
        <div id="content">
            <Head>
                <title>Home | Bapharia</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Guides for the online game BLUE PROTOCOL." />
            </Head>
            <Navbar />
            <main>
                <header className="hero-banner">
                    <h1>Guides</h1>
                    <h3>Information about various game mechanics and advice on optimizations.</h3>
                </header>
                <ul>
                    {allGuidesData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/guides/${id}`}>
                                <a>
                                    {title} <Date dateString={date}/>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}