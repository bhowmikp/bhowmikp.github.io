import { NextApiRequest, NextApiResponse } from 'next';

import Joi from 'joi';
import Boom from '@hapi/boom';

const schema = Joi.object({
    accessToken: Joi.string().required(),
    server: Joi.string().required()
});

const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return Boom.badRequest(error.message).output.payload;
    }

    return '';
};

export const getAccountInfo = async(server: string, accessToken: string) => {
    const accountInfo = await (await fetch(`${server}v1/accounts`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
			'Content-Type': 'application/x-www-form-urlencoded'
        },
        redirect: 'follow'
    })).json();

    return accountInfo;
}

export const getAccountHoldings = async(server: string, accessToken: string, accountNumber: string) => {
    const accountHoldings = await (await fetch(`${server}v1/accounts/${accountNumber}/positions`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
			'Content-Type': 'application/x-www-form-urlencoded'
        },
        redirect: 'follow'
    })).json();

    return accountHoldings;
}

export const getQuestradePortfolioOverview = async(server: string, accessToken: string) => {
    const returnData = {data: []};

    const accountInfo = await getAccountInfo(server, accessToken);

    await Promise.all(accountInfo.accounts.map(async (entry) => {
        const holdingsData = await getAccountHoldings(server, accessToken, entry.number);

        returnData.data.push({accountNumber: entry.number, holdings: holdingsData.positions});
    }))

    return returnData;
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    res.send(await getQuestradePortfolioOverview(String(req.query.server), String(req.query.accessToken)));
};
