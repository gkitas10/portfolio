import { MongoClient } from 'mongodb';

async function mongodbConnection () {
    const client = await MongoClient.connect('mongodb://localhost:27017/portfolio')
    const db = client.db()
    return {
        client,
        db
    }
}

export default mongodbConnection;

