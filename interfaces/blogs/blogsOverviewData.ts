import { IImage } from '@Interfaces/image';

export interface IBlogsOverviewData {
    category: string;
    description: string;
    _updatedAt: string;
    title: string;
    _id: string;
    blogImage: IImage;
}
