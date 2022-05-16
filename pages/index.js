import styles from '../styles/Home.module.css';
import Header from '../components/header'
import HomeBanner from '../components/HomeBanner'
import Projects from '../components/Projects'
import axiosClient from '../axios/axios';

export default function Home({ projectsDB }) {
  return (
    <div className={styles.main}>
      <Header/>
      <HomeBanner/>
      <Projects
      projectsDB={projectsDB}
      />
    </div>
  )
}

export async function getStaticProps () {
  const response = await axiosClient.get('/api/projects')
  const projectsDB = response.data.response;

  return {
    props:{
      projectsDB
    }
  }
}
