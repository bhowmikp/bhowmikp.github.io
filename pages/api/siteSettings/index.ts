import { NextApiRequest, NextApiResponse } from 'next';
import client from '@Clients/sanityClient';
import ISiteSettings from '@Interfaces/siteSettings';

import Joi from 'joi';
import Boom from '@hapi/boom';

const schema = Joi.object({
    field: Joi.string().max(100)
});

const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return Boom.badRequest(error.message).output.payload;
    }

    return '';
};

export const getSiteSettings = async (field?: string): Promise<ISiteSettings> => {
    const postQuery = `*[_type=="siteSettings"][0] ${field === 'undefined' ? `` : `{${field}}`}`;

    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    res.send(await getSiteSettings(String(req.query.field)));
};
