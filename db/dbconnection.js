import { MongoClient } from 'mongodb';

async function mongodbConnection () {
    const client = await MongoClient.connect('mongodb+srv://gkitas89:3YF28dO77j3dSzyB@cluster0.r1vbn.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db('portfolio')
    return {
        client,
        db
    }
}

export default mongodbConnection;

