import { IImage } from '@Interfaces/image';
import { IParagraphs } from '@Interfaces/paragraph';

export interface IHomepageHeading {
    description: any[];
    header: string;
    profilePic: IImage;
    resumeButtonText: string;
}

export interface IHomepageData {
    heading: IHomepageHeading;
    paragraphs: IParagraphs[];
}
