import styles from '../../styles/AboutmePage.module.css';
import Layout from "../../components/Layout"
import AboutMe from '../../components/AboutMe';
import mongodbConnection from '../../db/dbconnection';

const AboutmePage = ({ projectsDB }) => {
    return ( 
            <div className={styles.main}>
                <Layout projectsDB={projectsDB}>
                    <AboutMe/>
                </Layout>
            </div>
     );
}
 
export default AboutmePage;

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