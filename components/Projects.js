import styles from '../styles/Projects.module.css';

const Projects = () => {
    return ( 
        <div>
            <h2 className={styles.title}>{'<Proyectos/>'}</h2>
            <div className={styles.container}>
                <div className={styles['img-cont']}>
                    <img src='/habitshome.png'/>
                </div>
                <div className={styles['img-cont']}>
                    <img src='/contadorapp.png'/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;
    