import { NextApiRequest, NextApiResponse } from 'next';

import client from '@Sanity/sanityClient';
import { time as timeConstants } from '@Constants';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBlogsOverviewData = async (category?: string): Promise<any> => {
    const queryOrder = ` | order(_createdAt)`;
    const queryRange = `[0..6]`;
    const queryFields = `{
        category,
        description,
        _updatedAt,
        title,
        _id,
        blogImage
      }`;

    let postQuery = `*[_type == 'blog' && category == '${category}']`;

    if (category === undefined) {
        postQuery = `*[_type == 'blog']`;
    }

    postQuery += `${queryOrder} ${queryRange} ${queryFields}`;

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
    const blogsOverviewData = await getBlogsOverviewData(
        category === undefined ? (category as string) : (category[0] as string)
    );

    res.setHeader('Cache-Control', `max-age=0, s-maxage=${timeConstants.fifteenMinutesInSeconds}`);
    res.send(blogsOverviewData !== null ? blogsOverviewData : { found: 'false' });
};
