import Layout from '../../components/Layout';
import styles from '../../styles/AboutportfolioPage.module.css';
import mongodbConnection from '../../db/dbconnection';

const AboutportfolioPage = ({ projectsDB }) => {
  return (
    <div className={styles.main}>
      <Layout projectsDB={projectsDB}>
        <p className={styles.paragraph}>{`Este portafolio fue creado con Nextjs, un framework de React que renderiza los componentes estáticamente y también desde el servidor. 
              La aplicación se adapta al tamaño del dispositivo (desde 320px de ancho). Los proyectos están en una base de datos de MongoDB alojada en la Nube`}
          </p>
        <div className={styles.img_section}>
          <div className={styles.grid}>
            <a href='https://github.com/gkitas10/portfolio.git' target="_blank" rel="noopener noreferrer"><img src='/code160.png' className={styles.image}/></a>
            <a href='https://github.com/gkitas10/portfolio.git' target="_blank" rel="noopener noreferrer"><img src='/code2.png' className={styles.image}/></a>
            <a href='https://github.com/gkitas10/portfolio.git' target="_blank" rel="noopener noreferrer"><img src='/code3.png' className={styles.image}/></a>
            <a href='https://github.com/gkitas10/portfolio.git' target="_blank" rel="noopener noreferrer"><img src='/code4.png' className={styles.image}/></a>
          </div> 
        </div>
      </Layout>
    </div>
  )
}

export default AboutportfolioPage;

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