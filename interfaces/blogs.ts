import { ICtaBlogs } from '@Interfaces/ctaBlogs';
import { IImage } from '@Interfaces/image';

export interface ITableOfContents {
    sectionId: string;
    sectionLevel: number;
    sectionName: string;
}

export interface IRelatedArticles {
    target: string;
    url: string;
    urlText: string;
    _key: string;
}

export interface IReferences {
    target: string;
    url: string;
    urlText: string;
    _key: string;
}

export interface IBlogs {
    _updatedAt: string;
    _id: string;

    title: string;
    category: string;
    description: string;
    readingTime: number;
    tags: string[];
    body: [];
    references: IReferences[];
    relatedArticles: IRelatedArticles[];
    tableOfContents: ITableOfContents[];
    blogImage: IImage;

    ctaBlogs: ICtaBlogs;
}

export interface IBlogsCategory {
    _id: string;
    _updatedAt: string;
    category: string;
    description: string;
    readingTime: number;
    tags: string[];
    title: string;
}

export default IBlogs;
