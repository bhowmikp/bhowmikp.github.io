import urlBuilder from "@sanity/image-url";

export const urlFor = source =>
    urlBuilder({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
    }).image(source);