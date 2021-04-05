import urlBuilder from '@sanity/image-url';

const urlFor = (source: string): any =>
    urlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
    }).image(source);

export default urlFor;
