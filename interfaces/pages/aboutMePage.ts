import { IPageCover } from '@Interfaces/pageCover';
import { IImage } from '@Interfaces/image';
import { ICtaBlogs } from '@Interfaces/ctaBlogs';

export interface IAboutMeData {
    heading: IPageCover;
    aboutMe: string;
    paragraphTitle: string;
    paragraphDescription: any;
    profilePic: IImage;
    ctaBlogs: ICtaBlogs;
}
