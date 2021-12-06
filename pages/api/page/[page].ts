import { NextApiRequest, NextApiResponse } from 'next';

import client from '@Sanity/sanityClient';

import Joi from 'joi';
import { badRequest } from '@hapi/boom';

const schema = Joi.object({
    page: Joi.string().alphanum().min(5).max(25).required()
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return badRequest(error.message).output.payload;
    }

    return '';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPageData = async (page: string): Promise<any> => {
    const queryFields = `{
        ...,
        ctaBlogs {
           ...,
           "blog": blog[]->{
             category,
             description,
             _updatedAt,
             title,
             _id,
             blogImage
           }
        }
      }`;

    const postQuery = `*[_type=="${page}"][0] ${queryFields}`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    const { page } = req.query;
    const pageData = await getPageData(page as string);
    res.send(pageData !== null ? pageData : { found: 'false' });
};
