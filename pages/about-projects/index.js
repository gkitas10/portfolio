import styles from "../../styles/AboutProjectsPage.module.css";
import Slider from "../../components/Slider";
import axiosClient from "../../axios/axios";
import Layout from "../../components/Layout";

const AboutProjectsPage = ({ projectsDB }) => {
  
  return (
    <Layout>
      <div className={styles.main}>
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
      </div>
    </Layout>
  );
};

export default AboutProjectsPage;

export async function getStaticProps() {
  const response = await axiosClient.get("/api/projects");
  const projectsDB = response.data.response;

  return {
    props: {
      projectsDB,
    },
  };
}
