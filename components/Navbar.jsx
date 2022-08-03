import styles from '../styles/components/navbar.module.scss';
import Link from 'next/link';
import { IconWorld } from '@tabler/icons';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles["nav-body"]}>
                <menu className={styles["nav-links"]}>
                    <li className={styles.active}>
                        <Link href="#">News</Link>
                    </li>
                    <li>
                        <Link href="#">Interactive</Link>
                    </li>
                    <li>
                        <Link href="#">Guides</Link>
                    </li>
                </menu>
                <div>
                    
                    <input type="text" placeholder='Search' />
                    <IconWorld />
                </div>
            </div>
        </nav>
    )
}