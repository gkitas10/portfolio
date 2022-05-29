import { AngularIcon, NodejsIcon, ReactIcon, MongodbIcon, FirebaseIcon, ExpressIcon, Auth0Icon } from '../components/icons/icons';

export const  iconSwitch = (tech, idx) => {
    switch (tech) {
        case 'react':
            return <ReactIcon key={idx} smallicon/>
            break;

        case 'angular':
            return <AngularIcon key={idx} smallicon/>
            break;
                
        case 'nodejs':
            return <NodejsIcon key={idx} smallicon/>

        case 'mongodb':
            return <MongodbIcon key={idx} smallicon/> 
            
        case 'firebase':
            return <FirebaseIcon key={idx} smallicon/>
            
        case 'express':
            return <ExpressIcon key={idx} smallicon/>

        case 'auth0':
            return <Auth0Icon key={idx} smallicon/>
            
        default:
            break;
    }
}
 