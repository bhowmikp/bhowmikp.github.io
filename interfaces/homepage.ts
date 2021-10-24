import { ICta } from '@Interfaces/cta';
import { IImage } from '@Interfaces/image';

export interface IHomepageHeading {
    cta: ICta[];
    description: any[];
    header: string;
    profilePic: IImage;
}

export interface IHomepageData {
    heading: IHomepageHeading;
    paragraphs: any[];
}
