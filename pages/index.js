import styles from '../styles/Home.module.css';
import HomeBanner from '../components/HomeBanner';
import Projects from '../components/Projects';
import axiosClient from '../axios/axios';
import Slogan from '../components/Slogan';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import mongodbConnection from '../db/dbconnection';

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
  // const response = await axiosClient.get('/api/projects')
  // const projectsDB = response.data.response;
  //MongoDB Connection
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
