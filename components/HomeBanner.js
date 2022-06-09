import Link from "next/link";
import styles from '../styles/HomeBanner.module.css'

const HomeBanner = () => {
    return ( 
        <div className={styles.homebanner}>
            <div className={styles.info}>
                <div className={styles.info_cont}>
                    <div className={styles.greeting_cont}>
                        <h2 className={styles.homebanner__greeting}>Hola!</h2>
                        <span className={styles.emojy} role="img" aria-label="hand pointing down">👇</span>
                    </div>
                    <h1 className={styles.name}>Soy Jorge G. Cantón</h1>
                    <h1 className={styles.occupation}><span className={styles.span}>web</span> developer</h1>
                    <p className={styles.email}>gkitas10@gmail.com</p>
                    <Link href="/contact"><a className={styles.anchor}>Contáctame</a></Link>
                </div>
            </div>
            <div className={styles['img-cont']}>
                <img src="./personalpic2.png" className={styles.personal_pic}/>
            </div>
        </div>
     );
}
 
export default HomeBanner;