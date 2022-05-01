import Link from "next/link";
import styles from '../styles/HomeBanner.module.css'

const HomeBanner = () => {
    return ( 
        <div className={styles.homebanner}>
            <div>
                <div className={styles['homebanner__info-cont']}>
                    <div className={styles['homebanner__greeting-cont']}>
                        <h2 className={styles.homebanner__greeting}>Hola</h2>
                        <span className={styles.homebanner__emojy} role="img" aria-label="hand pointing down">👇</span>
                    </div>
                    <h1 className={styles.homebanner__name}>Mi nombre es Jorge G. Cantón</h1>
                    <h1 className={styles.homebanner__occupation}>Web developer</h1>
                    <p className={styles.homebanner__email}>gkitas10@gmail.com</p>
                    <Link href="/contact"><a className={styles['homebanner__anchor']}>Contáctame</a></Link>
                </div>
            </div>
            <div className={styles['homebanner__img-cont']}>
                <img src="https://assets.website-files.com/6218605145a2e6339ee94d62/6219e9a52501e60f3f97f944_home-two-men.png"/>
            </div>
        </div>
     );
}
 
export default HomeBanner;