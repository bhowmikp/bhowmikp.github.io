import { NextApiRequest, NextApiResponse } from 'next';

import client from '@Sanity/sanityClient';
import { time as timeConstants } from '@Constants';

const PAGE = 'blog';

export interface ITitleAndId {
    title: string;
    _id: string;
}

export const getAllTitleAndId = async (): Promise<ITitleAndId[]> => {
    const postQuery = `*[_type=="${PAGE}"]{
        _id,
        title
    }`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.setHeader('Cache-Control', `max-age=0, s-maxage=${timeConstants.oneDayInSeconds}`);
    res.send(await getAllTitleAndId());
};
