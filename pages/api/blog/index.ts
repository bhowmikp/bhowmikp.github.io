import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';
import { IBlogs } from '@Interfaces/blogs';

import Joi from 'joi';
import Boom from '@hapi/boom';

const schema = Joi.object({
    id: Joi.string().length(36).required()
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return Boom.badRequest(error.message).output.payload;
    }

    return '';
};

export const getBlog = async (id: string): Promise<IBlogs> => {
    const postQuery = `*[_type=="blog" && _id == "${id}"] {...}`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    res.send(await getBlog(String(req.query.id)));
};
