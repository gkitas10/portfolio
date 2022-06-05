import styles from "../../styles/AboutProjectsPage.module.css";
import Slider from "../../components/Slider";
import Layout from "../../components/Layout";
import mongodbConnection from "../../db/dbconnection";

const AboutProjectsPage = ({ projectsDB }) => {
  
  return (
      <div className={styles.main}>
        <Layout projectsDB={projectsDB}>
          {projectsDB.map((project, idx) => (
            <div className={styles.project} key={project._id}>
              <div className={styles.info}>
                <h2>{project.name}</h2>
                <p className={styles.paragraph}>{project.description}</p>
              </div>
              <div className={styles["imgs-section"]}>
                <Slider project={projectsDB[idx]} />
              </div>
            </div>
          ))}
        </Layout>
      </div>
    
  );
};

export default AboutProjectsPage;

export async function getStaticProps() {

  const { client, db } = await mongodbConnection();
  const projectsCollection = db.collection('projects');
  const response = await projectsCollection.find().toArray();
  const projectsDB = response.map((project) => {
    return {
        ...project,
        _id:project._id.toString()
    }
})

  return {
    props: {
      projectsDB,
    },
  };
}
