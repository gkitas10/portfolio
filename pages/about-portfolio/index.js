import Layout from '../../components/Layout';
import styles from '../../styles/AboutportfolioPage.module.css';

const AboutportfolioPage = () => {
  return (
    <div className={styles.main}>
      <Layout>
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

export default AboutportfolioPage