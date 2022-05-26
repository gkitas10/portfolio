import {useRouter} from "next/router";
import axiosClient from "../../../axios/axios";
import Layout from "../../../components/Layout";

const TutorialsPage = ({ projectsDB }) => {
    console.log(projectsDB);
    const router = useRouter();
    const id = router.query.tutorialid;
    const project = projectsDB.filter((project) => project._id === id)[0];
    console.log(project);

    return (
        <Layout>
            <div>
                <img
                src={'/' + project.imgsfolder + '/tutorial.png'}
                />
            </div>
        </Layout> 
    );
}
 
export default TutorialsPage;

export async function getStaticPaths() {
    return {
        paths:[
            {
                params:{
                    tutorialid:'62817894a2a32523ac325962'
                },
                params:{
                    tutorialid:'6281794ea2a32523ac325963'
                }
            }
        ],
        fallback:false
    }
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