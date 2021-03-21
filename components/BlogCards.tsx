/* eslint-disable no-underscore-dangle */
import IBlogs from '@Interfaces/blogs';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

export const config = { amp: 'hybrid' };

const BlogCard: FC<{ blogData: IBlogs }> = ({ blogData }) => {
    const router = useRouter();

    return (
        <div
            className="bg-gray-300 dark:bg-gray-600 mb-5 p-3"
            onClick={() => {
                router.push(`/blogs/${blogData.title.replaceAll(' ', '-')}_${blogData._id}`);
            }}
            key={blogData.title}
            role="link"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    router.push(`/blogs/${blogData.title.replaceAll(' ', '-')}_${blogData._id}`);
                }
            }}
            tabIndex={0}
        >
            <p>Title: {blogData.title}</p>
            <p>Description: {blogData.description}</p>
            <p>Reading Time: {blogData.readingTime}</p>
            <p>Last edited: {blogData._updatedAt.split('T')[0]}</p>
        </div>
    );
};

const BlogCards: FC<{ blogsData: IBlogs[] }> = ({ blogsData }) => (
    <>
        {blogsData.length === 0 ? (
            <>
                <p>No blogs available for this category</p>
            </>
        ) : (
            <>
                {blogsData.map((entry) => (
                    <BlogCard blogData={entry} key={entry._id} />
                ))}
            </>
        )}
    </>
);

export default BlogCards;
