import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@Clients/sanityClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const postQuery = '*[_type=="homepage"] | order (paragraphOrder) {body, figure}';
    const params = { minSeats: 2 };

    res.send(await client.fetch(postQuery, params));
};