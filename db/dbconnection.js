import { MongoClient } from 'mongodb';

async function mongodbConnection () {
    let URL = '';
    if(process.env.NODE_ENV === 'production'){
        URL = process.env.MONGO_URI; 
    }else {
        URL = process.env.DEV_URI;
    }

    const client = await MongoClient.connect(URL);
    const db = client.db('portfolio')
    return {
        client,
        db
    }
}

export default mongodbConnection;

