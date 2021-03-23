import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';
import IBlogs from '@Interfaces/blogs';

export const getNumberOfBlogs = async (category?: string): Promise<IBlogs> => {
    const postQuery = `count(*[_type=="blog" ${category === 'undefined' ? '' : `&& category == '${category}'`}])`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.send(await getNumberOfBlogs(String(req.query.category)));
};
