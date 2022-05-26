import styles from '../styles/Home.module.css';
import Header from '../components/header'
import HomeBanner from '../components/HomeBanner'
import Projects from '../components/Projects'
import axiosClient from '../axios/axios';
import Slogan from '../components/Slogan';
import Footer from '../components/Footer';
import DropdownMenu from '../components/DropdownMenu';
import Layout from '../components/Layout';

export default function Home({ projectsDB }) {
  console.log(projectsDB);
  return (
    <div className={styles.main}>
      <Layout>
        <HomeBanner/>
        <Slogan/>
        <Projects
        projectsDB={projectsDB}
        />
        <Footer
        projectsDB={projectsDB}
        />
      </Layout>
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
