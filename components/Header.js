import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import { BurguerIcon, JgIcon } from './icons/icons';
import Navlinks from './Navlinks';
import NavlinksMobile from './NavlinksMobile';

const Header = () => {
    const [ showmobile, setShowmobile ] = useState(false);
    return ( 
        <div className={ styles.main }>
            <div className={styles['logo-cont']}>
                <Link href='/'><a className={styles.anchor}>{<JgIcon/>}</a></Link> 
            </div>
            <div className={styles.burger_wrapper}>
                <div className={styles.burger_background + (showmobile ? (' ' + styles.burger_background_active) : '')}
                onClick={ () => setShowmobile(!showmobile) }
                >
                     <BurguerIcon/>
                </div>
            </div>
            {/* {
                showmobile ? <navbar className={styles.nav +' '+ styles.nav_mobile}><NavlinksMobile themeclass={themeclass}/></navbar> : <navbar className={styles.nav}><Navlinks themeclass={themeclass}/></navbar>
            } */}
            <navbar className={styles.nav}>
                { showmobile ? <NavlinksMobile/> : <Navlinks/> }
            </navbar>
        </div>
     );
}
 
export default Header;