import Contact from "../../components/Contact";
import Layout from "../../components/Layout";
import styles from '../../styles/ContactPage.module.css';
import mongodbConnection from "../../db/dbconnection";

const ContactPage = ( { projectsDB }) => {
    return ( 
        <div className={styles.main}>
            <Layout projectsDB={projectsDB}>
                <Contact/>
            </Layout>
        </div>
     );
}
 
export default ContactPage;

export async function getStaticProps () {
    const { client, db } = await mongodbConnection();
    const projectsCollection = db.collection('projects');
    const response = await projectsCollection.find().toArray();
    const projectsDB = response.map((project) => {
      return {
          ...project,
          _id:project._id.toString()
      }
  })
  
    client.close();
  
    return {
      props:{
        projectsDB
      }
    }
  }