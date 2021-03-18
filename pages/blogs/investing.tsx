import AppLayout from '@Components/AppLayout';
import BlogCards from '@Components/BlogCards';
import { GetStaticProps } from 'next';
import { getBlogsByCategory } from '@Api/blogsCategory';
import IBlogsCategory from '@Interfaces/blogsCategory';
import React, { FC } from 'react';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        blogsByCategoryData: await getBlogsByCategory('investing')
    },
    revalidate: 900
});

const Investing: FC<{ blogsByCategoryData: IBlogsCategory[] }> = ({ blogsByCategoryData }) => (
    <>
        <AppLayout title="Investing Blogs">
            <div className="mx-5 mb-10">
                <BlogCards blogsData={blogsByCategoryData} />
            </div>
        </AppLayout>
    </>
);

export default Investing;
