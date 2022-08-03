import styles from '../styles/components/navbar.module.scss';
import Link from 'next/link';

export function Navbar() {
    return(
        <nav className={styles.navbar}>
            <header>
                Bapharia
            </header>
            <div className={styles["nav-links"]}>
                <Link href="hey">Interactive</Link>
                <Link href="guides">Guides</Link>
                <Link href="about">About</Link>
            </div>
        </nav>
    )
}