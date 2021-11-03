import { ICta } from '@Interfaces/cta';
import { IImage } from '@Interfaces/image';

export interface IParagraphs {
    cta?: ICta[];
    image?: IImage;
    paragraphDescription: string;
    paragraphHeading: string;
    paragraphTitle: string;
    _key: string;
}
