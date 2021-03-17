interface IBlogsCategory {
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
}

export default IBlogsCategory;
