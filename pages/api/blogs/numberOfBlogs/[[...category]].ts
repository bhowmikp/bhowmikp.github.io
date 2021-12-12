import { NextApiRequest, NextApiResponse } from 'next';

import client from '@Sanity/sanityClient';

import Joi from 'joi';
import { badRequest } from '@hapi/boom';

const schema = Joi.object({
    category: Joi.array().min(1).max(1).items(Joi.string())
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return badRequest(error.message).output.payload;
    }

    return '';
};

export const getNumberOfBlogsData = async (category: string): Promise<void> => {
    let postQuery = `count(*[_type == 'blog' && category == '${category}'])`;

    if (category === undefined) {
        postQuery = `count(*[_type == 'blog'])`;
    }

    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    const { category } = req.query;
    const numberOfBlogsData = await getNumberOfBlogsData(
        category === undefined ? (category as string) : (category[0] as string)
    );
    res.send(numberOfBlogsData !== null ? { numberOfBlogs: numberOfBlogsData } : { found: 'false' });
};
