import { ICtaBlogs } from '@Interfaces/ctaBlogs';
import { IImage } from '@Interfaces/image';
import { IParagraphs } from '@Interfaces/paragraph';

export interface IHomepageHeading {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: any[];
    header: string;
    profilePic: IImage;
    resumeButtonText: string;
}

export interface IHomepageData {
    heading: IHomepageHeading;
    paragraphs: IParagraphs[];
    ctaBlogs: ICtaBlogs;
}
