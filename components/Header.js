import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import { JgIcon } from './icons/icons';

const Header = () => {
    const router = useRouter()
    const themeclass = router.route === '/about-projects' || router.route === '/contact' ? 'dark' : 'main';

    return ( 
        <div className={ styles[themeclass] }>
            <div className={styles['logo-cont']}>
                {/* <Link href='/'><div className={ themeclass === 'dark' ? styles['link-wrapper-dark'] : styles['link-wrapper'] }><a></a></div></Link> */}
                <Link href='/'><a className={styles.anchor}><JgIcon themeclass={themeclass}/></a></Link> 
            </div>
            <div className={styles['nav-cont']}>
                <navbar>
                    <Link href='/about-projects'><a className={styles.header__anchor + (themeclass === 'dark' ? (' ' + styles.header__anchor_dark) : '') }>Acerca de mis proyectos</a></Link> 
                    <Link href='/aboutme'><a className={styles.header__anchor + (themeclass === 'dark' ? (' ' + styles.header__anchor_dark) : '') }>Acerca de mi</a></Link>
                    <Link href='/contact'><a className={styles.header__anchor + (themeclass === 'dark' ? (' ' + styles.header__anchor_dark) : '') }>Contacto</a></Link>
                </navbar>
            </div>
        </div>
     );
}
 
export default Header;