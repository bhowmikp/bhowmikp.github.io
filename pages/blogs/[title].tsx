import AppLayout from '@Components/AppLayout';
import { GetServerSideProps } from 'next';
import { getBlog } from '@Api/getBlog';
import IBlogsCategory from '@Interfaces/blogsCategory';
import React, { FC } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import blogSerializer from '@Serializers/blogSerializer';

export const config = { amp: 'hybrid' };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = String(ctx.query.title).split('_')[1];

    return {
        props: {
            blogData: await getBlog(id)
        }
    };
};

const Post: FC<{ blogData: IBlogsCategory[] }> = ({ blogData }) => {
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
