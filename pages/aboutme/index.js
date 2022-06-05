import styles from '../../styles/AboutmePage.module.css';
import Layout from "../../components/Layout"
import AboutMe from '../../components/AboutMe';

const AboutmePage = () => {
    return ( 
            <div className={styles.main}>
                <Layout>
                    <AboutMe/>
                </Layout>
            </div>
     );
}
 
export default AboutmePage;