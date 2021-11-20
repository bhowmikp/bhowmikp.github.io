import { IPageCover } from '@Interfaces/pageCover';
import { IImage } from '@Interfaces/image';

export interface IAboutMeData {
    heading: IPageCover;
    aboutMe: string;
    paragraphTitle: string;
    paragraphDescription: any;
    profilePic: IImage;
}
