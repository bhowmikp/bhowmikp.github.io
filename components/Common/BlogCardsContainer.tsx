import React, { FC } from 'react';
import { BlogCard } from '@Components/Blog/BlogCard';
import { IBlogsOverviewData } from '@Interfaces/blogs/blogsOverviewData';

export const BlogCardsContainer: FC<{ blogsData: IBlogsOverviewData[] }> = ({ blogsData }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-20 gap-y-8">
        {blogsData.map((blog) => (
            <div key={blog._id}>
                <BlogCard blogData={blog} />
            </div>
        ))}
    </div>
);

export default BlogCardsContainer;
