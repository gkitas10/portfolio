import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import { BurguerIcon, JgIcon } from './icons/icons';
import Navlinks from './Navlinks';
import NavlinksMobile from './NavlinksMobile';

const Header = () => {
    const router = useRouter()
    const themeclass = router.route === '/about-projects' || router.route === '/contact' || router.route === '/aboutme' ? 'dark' : 'main';
    const [ showmobile, setShowmobile ] = useState(false);

    return ( 
        <div className={ styles[themeclass] }>
            <div className={styles['logo-cont']}>
                <Link href='/'><a className={styles.anchor}>{<JgIcon themeclass={themeclass}/>}</a></Link> 
            </div>
            <div className={styles.burger_wrapper}>
                <div className={styles.burger_background + (showmobile ? (' ' + styles.burger_background_active) : '')}
                onClick={ () => setShowmobile(!showmobile) }
                >
                     <BurguerIcon/>
                </div>
            </div>
            <navbar className={styles.nav}>
                { showmobile ? <NavlinksMobile themeclass={themeclass}/> : <Navlinks themeclass={themeclass}/> }
            </navbar>
                {/* <div className={styles['nav-cont']}></div> */}
        </div>
     );
}
 
export default Header;