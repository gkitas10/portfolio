import styles from "../../styles/AboutProjectsPage.module.css";
import projectsInfo from "../../components/projects-info/ProjectsInfo";
import Slider from "../../components/Slider";

const AboutProjectsPage = () => {
  return (
    <div className={styles.main}>
      {projectsInfo.map((project, idx) => (
        <div className={styles.project}>
          <div className={styles.info}>
            <h2>{project.name}</h2>
            <p className={styles.paragraph}>{project.description}</p>
            <a href={project.tutorialurl} target="__blank">
              Ir al tutorial
            </a>
          </div>
          <div className={styles["imgs-section"]}>
            {/* {projectsInfo.map((project, idx) => (
              <Slider key={idx} project={projectsInfo[idx]}/>
            ))} */}
            <Slider project={projectsInfo[idx]}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutProjectsPage;
