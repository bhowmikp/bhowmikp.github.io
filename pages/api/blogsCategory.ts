import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';
import { IBlogsCategory } from '@Interfaces/blogs';

import Joi from 'joi';
import Boom from '@hapi/boom';

const schema = Joi.object({
    category: Joi.string().valid('programming', 'investing', 'miscellaneous').optional(),
    page: Joi.number().min(0).optional()
});

const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return Boom.badRequest(error.message).output.payload;
    }

    return '';
};

export const getBlogsByCategory = async (category: string, page = 0): Promise<IBlogsCategory[]> => {
    const range = `[${0 + 20 * page}..${19 + 20 * page}]`;
    const postQuery = `
    *[_type=="blog" ${
        category === 'undefined' ? `` : `&& category == '${category}'`
    }] | order(_createdAt desc) | ${range} { title, description, readingTime, tags, category, _updatedAt, _id } `;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    const page = req.query.page === undefined ? 1 : parseInt(String(req.query.page), 10);
    res.send(await getBlogsByCategory(String(req.query.category), page));
};
