/* eslint-disable no-underscore-dangle */
import AppLayout from '@Components/AppLayout';
import TableOfContents from '@Components/TableOfContents';
import { getBlog } from '@Api/blog';
import { getBlogsByCategory } from '@Api/blogsCategory';
import IBlogs from '@Interfaces/blogs';
import React, { FC } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import blogSerializer from '@Serializers/blogSerializer';
import concat from 'lodash/concat';
import isEmpty from 'lodash/isEmpty';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export const config = { amp: 'hybrid' };

export const getStaticPaths: GetStaticPaths = async () => {
    const getBlogPathsOfCategory = async (category) =>
        (await getBlogsByCategory(category)).map((entry) => ({
            params: { title: `${entry.title.replace(/\s/g, '-')}_${entry._id}` }
        }));

    // first 10 blogs by category at build time
    const firstTenProgrammingBlogPaths = (await getBlogPathsOfCategory('programming')).slice(0, 10);
    const firstTenInvestingBlogPaths = (await getBlogPathsOfCategory('investing')).slice(0, 10);
    const firstTenMiscellaneousBlogPaths = (await getBlogPathsOfCategory('miscellaneous')).slice(0, 10);

    return {
        paths: concat(firstTenProgrammingBlogPaths, firstTenInvestingBlogPaths, firstTenMiscellaneousBlogPaths),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = String(params.title).split('_')[1];
    const blogData = await getBlog(id);

    if (isEmpty(blogData)) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            blogData
        },
        revalidate: 86400
    };
};

const PostLoading = () => (
    <AppLayout title="Loading...">
        <div className="mx-5 mb-10">
            <div className="h-screen flex justify-center items-center">
                <div className="relative flex justify-center items-center h-3">
                    <svg
                        className="animate-spin -ml-1 mr-3 h-10 w-10 text-black dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <p className="text-2xl">Loading...</p>
                </div>
            </div>
        </div>
    </AppLayout>
);

const Post: FC<{ blogData: IBlogs[] }> = ({ blogData }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <PostLoading />;
    }

    const data = blogData[0];
    const updatedAtDate = new Date(data._updatedAt.split('T')[0]);

    return (
        <AppLayout title={data.title}>
            <div className="mb-10 w-11/12 mx-auto">
                <div className="block lg:grid lg:grid-cols-4">
                    <div className="col-span-3">
                        <p className="text-4xl font-bold my-2 text-black dark:text-white">{data.title}</p>
                        <p>
                            {`${updatedAtDate.toLocaleString('default', {
                                month: 'short'
                            })} ${updatedAtDate.getDay()}, ${updatedAtDate.getFullYear()}`}{' '}
                            · {data.readingTime} min read
                        </p>
                        <hr className="blog-hr-style my-2" />

                        <BlockContent blocks={data.body} serializers={blogSerializer} />

                        {('relatedArticles' in data && data.relatedArticles.length !== 0) ||
                            ('references' in data && data.references.length !== 0 && (
                                <hr className="blog-hr-style mt-20 mb-5" />
                            ))}

                        {'relatedArticles' in data && data.relatedArticles.length !== 0 && (
                            <>
                                <p className="text-2xl">Related Articles</p>
                                <ul className="list-disc ml-5">
                                    {data.relatedArticles.map((entry) => (
                                        <li key={entry._key}>
                                            <a target={entry.target} href={entry.url} className="blog-link">
                                                {entry.urlText}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {'references' in data && data.references.length !== 0 && (
                            <div
                                className={
                                    'relatedArticles' in data && data.relatedArticles.length !== 0 ? 'mt-10' : ''
                                }
                            >
                                <p className="text-2xl">References</p>
                                <ul className="list-disc ml-5">
                                    {data.references.map((entry) => (
                                        <li key={entry._key}>
                                            <a target={entry.target} href={entry.url} className="blog-link">
                                                {entry.urlText}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-10">
                            {data.tags.map((tag) => (
                                <span key={tag} className="bg-gray-300 mr-2 p-2 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block lg:ml-5">
                        <TableOfContents tableOfContents={data.tableOfContents} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Post;
