import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';
import { IBlogsCategory } from '@Interfaces/blogs';

export const getBlogsByCategory = async (category?: string, page = 1): Promise<IBlogsCategory[]> => {
    const range = `[${0 + 20 * (page - 1)}..${19 + 20 * (page - 1)}]`;
    const postQuery = `
    *[_type=="blog" ${
        category === '' || category === undefined ? `` : `&& category == '${category}'`
    }] | order(_createdAt desc) | ${range} { title, description, readingTime, tags, category, _updatedAt, _id } `;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const page = req.query.page === undefined ? 1 : parseInt(String(req.query.page), 10);
    res.send(await getBlogsByCategory(String(req.query.category), page));
};
