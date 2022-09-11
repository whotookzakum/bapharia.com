import styles from '../styles/components/navbar.module.scss';
import Link from 'next/link';
import { IconWorld } from '@tabler/icons';
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    
    return (
        <nav className={styles.navbar} role="navigation">
            <div className={styles["nav-links"]}>
                <Link href="/">
                    <a className={router.pathname === ("/") ? styles["active"] : ""}>Home</a>
                </Link>
                <Link href="#">
                    <a>Interactive</a>
                </Link>
                <Link href="/guides">
                    <a className={router.pathname.includes("guides") ? styles["active"] : ""}>Guides</a>
                </Link>
            </div>
            <div className={styles["nav-extras"]}>
                <input type="text" placeholder='Search' />
                <IconWorld />
            </div>
        </nav>
    )
}