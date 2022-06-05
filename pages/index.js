import styles from '../styles/Home.module.css';
import HomeBanner from '../components/HomeBanner';
import Projects from '../components/Projects';
import Slogan from '../components/Slogan';
import Layout from '../components/Layout';
import mongodbConnection from '../db/dbconnection';

export default function Home({ projectsDB }) {
  return (
    <div className={styles.main}>
      <Layout projectsDB={projectsDB}>
        <HomeBanner/>
        <Slogan/>
        <Projects
        projectsDB={projectsDB}
        />
      </Layout>
    </div>
  )
}

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
