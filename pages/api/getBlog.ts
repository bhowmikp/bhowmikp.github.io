import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';

export const getBlog = async (id: string): Promise<void> => {
    const postQuery = `*[_type=="blog" && _id == '${id}'] { ... } `;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.query.id === undefined) {
        res.send({ error: 'Need to specify id' });
    }
    res.send(await getBlog(req.query.id as string));
};
