/* eslint-disable no-underscore-dangle */
import AppLayout from '@Components/AppLayout';
import { getBlog } from '@Api/getBlog';
import { getBlogsByCategory } from '@Api/blogsCategory';
import IBlogs from '@Interfaces/blogs';
import React, { FC } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import blogSerializer from '@Serializers/blogSerializer';
import concat from 'lodash/concat';
import { GetStaticPaths, GetStaticProps } from 'next';

export const config = { amp: 'hybrid' };

export const getStaticPaths: GetStaticPaths = async () => {
    const getBlogPathsOfCategory = async (category) =>
        (await getBlogsByCategory(category)).map((entry) => ({
            params: { title: `${entry.title.replace(/\s/g, '-')}_${entry._id}` }
        }));

    const firstTenProgrammingBlogPaths = (await getBlogPathsOfCategory('programming')).slice(0, 10);
    const firstTenInvestingBlogPaths = (await getBlogPathsOfCategory('investing')).slice(0, 10);
    const firstTenMiscellaneousBlogPaths = (await getBlogPathsOfCategory('miscellaneous')).slice(0, 10);

    return {
        paths: concat(firstTenProgrammingBlogPaths, firstTenInvestingBlogPaths, firstTenMiscellaneousBlogPaths),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = String(params.title).split('_')[1];

    return {
        props: {
            blogData: await getBlog(id)
        }
    };
};

const Post: FC<{ blogData: IBlogs[] }> = ({ blogData }) => {
    const data = blogData[0];

    return (
        <AppLayout title={data.title}>
            <div className="mx-5 mb-10">
                <p>Title: {data.title}</p>

                <BlockContent blocks={data.body} serializers={blogSerializer} />
            </div>
        </AppLayout>
    );
};

export default Post;
