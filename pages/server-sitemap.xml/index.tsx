/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';

import { getAllTitleAndId } from '@Api/blogs/allTitleAndId';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    const allTitleAndId = await getAllTitleAndId();

    const fields = allTitleAndId.map((entry) => ({
        loc: `${process.env.NEXT_PUBLIC_HOST_URL || 'https://prantar.com'}/${entry.title.replace(/ /g, '-')}_${
            entry._id
        }`,
        lastmod: new Date().toISOString()
    }));

    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {};
