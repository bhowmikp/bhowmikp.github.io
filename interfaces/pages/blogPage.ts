import { IPageCover } from '@Interfaces/pageCover';

export interface IBlogPage {
    heading: IPageCover;
    categories: string[];
    nextButton: string;
    previousButton: string;
    blogHeading: string;
}
