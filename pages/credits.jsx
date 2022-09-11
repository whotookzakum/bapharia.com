import styles from '../styles/pages/credits.module.scss';
import credits from '../data/en-US/credits.json';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const translations = credits.translations.map(({ name, language }) =>
    <li key={name}>{name} ({language})</li>
);

const specialThanks = credits.specialThanks.map(name =>
    <li key={name}>{name}</li>
);

const supporters = credits.supporters.map(name => 
    <li key={name}>{name}</li>
);

const references = credits.references.map(({ name, link }) =>
    <li key={name}>
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
            {name}
        </a>
    </li>
);

export default function CreditsPage() {
    return (
        <div id="content">
            <Head>
                <title>Home | Bapharia</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Guides for the online game BLUE PROTOCOL." />
            </Head>
            <Navbar />
            <main>
                <section className={styles.credits}>
                    <h3>Created By</h3>
                    <ul>
                        <li>Zakum</li>
                    </ul>
                    <hr />
                    <h3>Supporters</h3>
                    <ul>{supporters}</ul>
                    <hr />
                    <h3>Translations</h3>
                    <ul>{translations}</ul>
                    <hr />
                    <h3>Special Thanks</h3>
                    <ul>{specialThanks}</ul>
                    <hr />
                    <h3>References</h3>
                    <ul>{references}</ul>
                </section>
            </main>
        </div>
    )
}