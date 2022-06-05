import Contact from "../../components/Contact";
import Layout from "../../components/Layout";
import styles from '../../styles/ContactPage.module.css';

const ContactPage = () => {
    return ( 
        <div className={styles.main}>
            <Layout>
                <Contact/>
            </Layout>
        </div>
     );
}
 
export default ContactPage;