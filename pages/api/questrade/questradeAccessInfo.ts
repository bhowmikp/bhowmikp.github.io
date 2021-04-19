import { NextApiRequest, NextApiResponse } from 'next';

import Joi from 'joi';
import Boom from '@hapi/boom';

const schema = Joi.object({
    code: Joi.string().required(),
    redirectUri: Joi.string().required()
});

const validate = async (req: NextApiRequest): Promise<any> => {
    const { error } = schema.validate(req.query);

    if (error) {
        return Boom.badRequest(error.message).output.payload;
    }

    return '';
};

export const getQuestradeAccessInfo = async(code: string, redirectUri: string) => {
    const accessInfo = await (await fetch(`https://login.questrade.com/oauth2/token?client_id=${process.env.NEXT_PUBLIC_QUESTRADE_CLIENT_ID}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`, {
        method: 'POST',
        redirect: 'follow'
    })).json();

    console.log(accessInfo, `https://login.questrade.com/oauth2/token?client_id=${process.env.NEXT_PUBLIC_QUESTRADE_CLIENT_ID}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`)

    return accessInfo;
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const error = await validate(req);
    if (error) {
        res.send(JSON.stringify(error));
        return;
    }

    res.send(await getQuestradeAccessInfo(String(req.query.code), String(req.query.redirectUri)));
};
