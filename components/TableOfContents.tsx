import React, { FC, useContext } from 'react';
import { isEmpty } from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { ITableOfContents } from '@Interfaces/blogs';
import { BlogContext } from '@Contexts/blogContext';

const TableOfContents: FC<{ tableOfContents: ITableOfContents[] }> = ({ tableOfContents }) => {
    const router = useRouter();
    const blogContext = useContext(BlogContext);

    return (
        <div className="sticky top-5 blog-table-of-contents-border">
            <b className="mb-2 text-black dark:text-white">Table of Contents</b>

            {isEmpty(tableOfContents) ? (
                <p>N/A</p>
            ) : (
                tableOfContents.map((entry) => (
                    <p
                        key={entry.sectionId}
                        className={`
                            ${blogContext.state.id === entry.sectionId ? 'font-bold' : ''}
                            ${entry.sectionLevel === 2 ? `blog-table-of-contents-padding-2` : ''}
                            ${entry.sectionLevel === 3 ? `blog-table-of-contents-padding-3` : ''}
                        `}
                    >
                        <a
                            href={`${router.query.title}#${entry.sectionId}`}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(`${router.query.title}#${entry.sectionId}`);
                            }}
                            className="blog-table-of-contents-link"
                        >
                            {entry.sectionName}
                        </a>
                    </p>
                ))
            )}
        </div>
    );
};

export default TableOfContents;
