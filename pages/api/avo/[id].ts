import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()
    const id = request.query.id;
    const allEntries = await db.getById(id as string);

    // response.statusCode = 200
    // response.setHeader('Content-type' , 'application/json')
    // response.end(JSON.stringify({data: allEntries}))

    response.status(200).json(allEntries);

}

export default allAvos;