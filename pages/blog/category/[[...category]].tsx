/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import { BlogCardsContainer } from '@Components/Common/BlogCardsContainer';

import { getBlogsOverviewData } from '@Api/blogs/overview/[[...category]]';
import { getPageData } from '@Api/page/[page]';

import { IBlogPage } from '@Interfaces/pages/blogPage';
import { IBlogsOverviewData } from '@Interfaces/blogs/blogsOverviewData';

import { useQuery } from 'react-query';

import { NextSeo } from 'next-seo';

import { time as timeConstants } from '@Constants';

const RECENT_PAGE = 'recent';

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
    } else if (params.category[0] === RECENT_PAGE) {
        pageCategory = undefined;
    } else {
        pageCategory = blogPageDataCategories.includes(params.category[0]) ? params.category[0] : undefined;
    }

    return {
        props: {
            blogPageData,
            blogsOverviewData: await getBlogsOverviewData(pageCategory)
        },
        revalidate: timeConstants.fifteenMinutesInSeconds
    };
};

const Blogs: FC<{ blogPageData: IBlogPage; blogsOverviewData: IBlogsOverviewData[] }> & { getLayout: ReactNode } = ({
    blogPageData,
    blogsOverviewData
}) => {
    if (blogPageData === undefined || blogsOverviewData === undefined) {
        return <></>;
    }

    const router = useRouter();
    const [pageCategory, setPageCategory] = useState(
        router.query.category !== undefined && (router.query.category[0] as string).toLowerCase() !== RECENT_PAGE
            ? (router.query.category[0] as string).toLowerCase()
            : ''
    );

    const { data: blogsOverviewDataModified } = useQuery(
        [`Blogs Overview ${pageCategory}`, pageCategory],
        async () => (await fetch(`/api/blogs/overview/${pageCategory}`, { method: 'GET' })).json(),
        { initialData: blogsOverviewData, refetchOnMount: false }
    );

    return (
        <>
            <PageCover pageCoverData={blogPageData.heading} />

            <div className="mx-auto w-10/12 md:w-9/12 lg:w-8/12 py-10">
                <div className="flex flex-nowrap overflow-x-scroll xl:overflow-x-hidden md:w-9/12 xl:w-7/12 mx-auto mb-10 justify-between">
                    {blogPageData.categories.map((category, index) => (
                        <a
                            href={`/blog/category/${category.toLowerCase()}`}
                            className={`inline-block bg-button ${
                                blogPageData.categories.length - 1 !== index && 'mr-5'
                            } px-5 py-1 rounded-xl text-white dark:text-black font-medium`}
                            key={category}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(category.toLowerCase(), undefined, { shallow: true });
                                setPageCategory(category.toLowerCase() !== RECENT_PAGE ? category.toLowerCase() : '');
                            }}
                        >
                            {category}
                        </a>
                    ))}
                </div>

                <p className="text-nav border-b-2 border-experienceSection font-medium mb-10">
                    {blogPageData.blogHeading}
                </p>

                <BlogCardsContainer blogsData={blogsOverviewDataModified} />
            </div>
        </>
    );
};

Blogs.getLayout = (page: ReactElement) => (
    <>
        <NextSeo
            title="Blogs"
            description="My thoughts on different topics, mainly related to programming, and investing."
        />

        <AppLayout mainClassName="bg-secondary">{page}</AppLayout>
    </>
);

export default Blogs;
