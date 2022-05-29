import styles from '../../styles/AboutmePage.module.css';
import Layout from "../../components/Layout"
import AboutMe from '../../components/AboutMe';

const AboutmePage = () => {
    return ( 
        <Layout>
            <div className={styles.main}>
                <AboutMe/>
            </div>
        </Layout>
     );
}
 
export default AboutmePage;