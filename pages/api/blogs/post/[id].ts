import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Sanity/sanityClient';
import { IBlogs } from '@Interfaces/blogs';

import Joi from 'joi';
import { badRequest } from '@hapi/boom';

const schema = Joi.object({
    id: Joi.string().length(36).required()
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return badRequest(error.message).output.payload;
    }

    return '';
};

export const getPost = async (id: string): Promise<IBlogs> => {
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

    const { id } = req.query;
    const postData = await getPost(id as string);
    res.send(postData);
};
