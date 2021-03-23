import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';
import IBlogs from '@Interfaces/blogs';

import Joi from 'joi';
import Boom from '@hapi/boom';

const schema = Joi.object({
    category: Joi.string().valid('programming', 'investing', 'miscellaneous').optional()
});

const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return Boom.badRequest(error.message).output.payload;
    }

    return '';
};

export const getNumberOfBlogs = async (category?: string): Promise<IBlogs> => {
    const postQuery = `count(*[_type=="blog" ${category === 'undefined' ? '' : `&& category == '${category}'`}])`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    res.send(await getNumberOfBlogs(String(req.query.category)));
};
