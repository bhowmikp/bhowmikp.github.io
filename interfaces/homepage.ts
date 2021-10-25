import { ICta } from '@Interfaces/cta';
import { IImage } from '@Interfaces/image';

export interface IHomepageHeading {
    cta: ICta[];
    description: any[];
    header: string;
    profilePic: IImage;
}

export interface IParagraphs {
    cta: ICta[];
    image: IImage;
    paragraphDescription: string;
    paragraphHeading: string;
    paragraphTitle: string;
    _key: string;
}

export interface IHomepageData {
    heading: IHomepageHeading;
    paragraphs: IParagraphs[];
}
