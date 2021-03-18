import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';

export const getBlogsByCategory = async (category?: string): Promise<void> => {
    const postQuery = `
    *[_type=="blog" ${
        category === '' || category === undefined ? `` : `&& category == '${category}'`
    }] | order(_createdAt desc) { title, description, readingTime, tags, category, _updatedAt, _id } `;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.send(await getBlogsByCategory(req.query.category as string));
};
