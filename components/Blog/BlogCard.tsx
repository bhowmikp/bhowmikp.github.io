import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBlogsOverviewData } from '@Interfaces/blogs/blogsOverviewData';

import urlFor from '@Service/sanityImageService';

export const BlogCard: FC<{ blogData: IBlogsOverviewData }> = ({ blogData }) => (
    <div className="bg-primary">
        <Link href={`/blog/${blogData.title.replace(/ /g, '-')}_${blogData._id}`} key={blogData._id}>
            <a>
                <div className="relative h-72">
                    <Image
                        src={urlFor(blogData.blogImage.image).url()}
                        alt={blogData.blogImage.alt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="px-10 py-10 h-72">
                    <p className="text-center font-medium text-2xl text-secondary">{blogData.title}</p>
                    <p className="mt-2 text-xl text-center text-secondary">
                        <span className="capitalize">{blogData.category}</span> / {blogData._updatedAt}
                    </p>
                    <p className="mt-8 text-xl text-secondary text-center">{blogData.description}</p>
                </div>
            </a>
        </Link>
    </div>
);

export default BlogCard;
