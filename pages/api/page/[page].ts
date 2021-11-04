import { NextApiRequest, NextApiResponse } from 'next';

import client from '@Clients/sanityClient';

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

export const getPageData = async (page: string): Promise<void> => {
    const postQuery = `*[_type=="${page}"][0]`;
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
    res.send(await getPageData(page as string));
};
