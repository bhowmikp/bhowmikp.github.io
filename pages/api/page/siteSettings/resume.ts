import { NextApiRequest, NextApiResponse } from 'next';
import { get } from 'https';

import client from '@Clients/sanityClient';
import { time as timeConstants } from '@Constants';

export const getResume = async (): Promise<{ url: string }> => {
    const postQuery = `*[_type == 'siteSettings'] {
        "url": resume.asset->url
      }[0]`;
    const params = { minSeats: 2 };

    return client.fetch(postQuery, params);
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    res.setHeader('Cache-Control', `max-age=0, s-maxage=${timeConstants.oneDayInSeconds}`);
    const resumeUrl = (await getResume()).url;

    return get(resumeUrl, (stream) => {
        stream.pipe(res);
        stream.on('end', () => {
            res.end();
        });
    });
};
