import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';

import { getBlogsOverviewData } from '@Api/blogs/overview/[[...category]]';
import { getPageData } from '@Api/page/[page]';

import { IBlogPage } from '@Interfaces/pages/blogPage';
import { IBlogsOverviewData } from '@Interfaces/blogs/blogsOverviewData';

import { time as timeConstants } from '@Constants';

export const getStaticPaths: GetStaticPaths = async () => {
    const blogPageData: IBlogPage = await getPageData('blogPage');
    let categories: { params: { category: string[] } }[] = [];

    blogPageData.categories.forEach((category: string) => {
        categories.push({ params: { category: [category.toLowerCase()] } });
    });

    return {
        paths: categories,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const blogPageData: IBlogPage = await getPageData('blogPage');
    const blogPageDataCategories = blogPageData.categories.map((category) => category.toLowerCase());

    let pageCategory;

    if (params.category === undefined) {
        pageCategory = undefined;
    } else if (params.category[0] === 'recent') {
        pageCategory = undefined;
    } else {
        pageCategory = blogPageDataCategories.includes(params.category[0]) ? params.category[0] : undefined;
    }

    return {
        props: {
            blogPageData,
            blogsOverviewData: await getBlogsOverviewData(pageCategory)
        },
        revalidate: timeConstants.oneDayInSeconds
    };
};

const Blogs: FC<{ blogPageData: IBlogPage; blogsOverviewData: IBlogsOverviewData[] }> & { getLayout: ReactNode } = ({
    blogPageData,
    blogsOverviewData
}) => {
    if (blogPageData === undefined || blogsOverviewData === undefined) {
        return <></>;
    }

    return (
        <>
            <PageCover pageCoverData={blogPageData.heading} />

            <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 py-10">
                <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:w-8/12 mx-auto mb-10">
                    {blogPageData.categories.map((category) => (
                        <Link href={`/blog/category/${category.toLowerCase()}`} key={category}>
                            <a
                                href={`/blog/category/${category.toLowerCase()}`}
                                className="inline-block bg-button mr-5 md:mx-auto px-5 py-1 rounded-xl text-white dark:text-black font-medium"
                            >
                                {category}
                            </a>
                        </Link>
                    ))}
                </div>

                <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">
                    {blogPageData.blogHeading}
                </p>

                {blogsOverviewData.map((blogData) => (
                    <Link href={`/blog/${blogData.title.replace(/ /g, '-')}_${blogData._id}`} key={blogData._id}>
                        <a>
                            <div className="border-experienceSection border-2 p-2">
                                <p>{blogData.title}</p>
                                <p>{blogData.description}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

Blogs.getLayout = (page: ReactElement) => (
    <AppLayout title="Blogs" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Blogs;
