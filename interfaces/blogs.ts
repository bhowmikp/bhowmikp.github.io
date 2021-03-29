interface ITableOfContents {
    sectionId: string;
    sectionLevel: number;
    sectionName: string;
}

interface IBlogs {
    _updatedAt: string;
    _id: string;

    title: string;
    category: string;
    description: string;
    readingTime: number;
    tags: string[];
    body: [];
    references: string[];
    relatedArticles: string[];
    tableOfContents: ITableOfContents[];
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
