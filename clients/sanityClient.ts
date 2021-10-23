import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2021-10-14',
    token: process.env.SANITY_TOKEN,
    useCdn: false
});

export default client;
