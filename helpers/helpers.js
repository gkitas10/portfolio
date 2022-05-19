import { AngularIcon, NodejsIcon, ReactIcon, MongodbIcon, FirebaseIcon, ExpressIcon } from '../components/icons/icons';

export const  iconSwitch = (tech, idx) => {
    switch (tech) {
        case 'react':
            return <ReactIcon key={idx}/>
            break;

        case 'angular':
            return <AngularIcon key={idx}/>
            break;
                
        case 'nodejs':
            return <NodejsIcon key={idx}/>

        case 'mongodb':
            return <MongodbIcon key={idx}/> 
            
        case 'firebase':
            return <FirebaseIcon key={idx}/>
            
        case 'express':
            return <ExpressIcon key={idx}/>
            
        default:
            break;
    }
}
 