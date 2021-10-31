import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';

export const getHomepageData = async (): Promise<void> => {
    const postQuery = '*[_type=="homepage"][0]';
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.send(await getHomepageData());
};
