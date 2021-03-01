import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@Clients/sanityClient';

export const getHomepageData = async () => {
    const postQuery = '*[_type=="homepage"] | order (paragraphOrder) {body, figure}';
    const params = { minSeats: 2 };

    return (await client.fetch(postQuery, params));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.send(await getHomepageData());
};