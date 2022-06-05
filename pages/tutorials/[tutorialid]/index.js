import {useRouter} from "next/router";
import Layout from "../../../components/Layout";
import mongodbConnection from "../../../db/dbconnection";

const TutorialsPage = ({ projectsDB }) => {
    const router = useRouter();
    const id = router.query.tutorialid;
    const project = projectsDB.filter((project) => project._id === id)[0];

    return (
        <div>
            <Layout>
                <img
                src={'/' + project.imgsfolder + '/tutorial.png'}
                />
            </Layout>
        </div>
    );
}
 
export default TutorialsPage;

export async function getStaticPaths() {
    return {
        paths:[
            {
                params:{
                    tutorialid:'62817894a2a32523ac325962'
                } 
            },            
            {   
                params:{
                    tutorialid:'6281794ea2a32523ac325963'
                }
            }
        ],
        fallback:false
    }
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