import { AngularIcon, NodejsIcon, ReactIcon, MongodbIcon } from '../components/icons/icons';

export const  iconSwitch = (tech) => {
    switch (tech) {
        case 'react':
            return <ReactIcon/>
            break;

        case 'angular':
            return <AngularIcon/>
            break;
                
        case 'nodejs':
            return <NodejsIcon/>

        case 'mongodb':
            return <MongodbIcon/>    
            
        default:
            break;
    }
}
 