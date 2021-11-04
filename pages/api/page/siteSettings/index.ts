import { NextApiRequest, NextApiResponse } from 'next';

import client from '@Clients/sanityClient';
import { time as timeConstants } from '@Constants';

const PAGE = 'siteSettings';

export const getPageData = async (): Promise<void> => {
    const postQuery = `*[_type=="${PAGE}"][0]`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.setHeader('Cache-Control', `max-age=0, s-maxage=${timeConstants.oneDayInSeconds}`);
    res.send(await getPageData());
};
