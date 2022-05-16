// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongodbConnection from "../../db/dbconnection";

export default async function handler(req, res) {
  if(req.method === 'GET') {
    const { client, db } = await mongodbConnection()
    const projectsCollection = db.collection('projects');
    let response = await projectsCollection.find({}).toArray()
    client.close()

    res.status(200).json({
      response
    })
  }
}
