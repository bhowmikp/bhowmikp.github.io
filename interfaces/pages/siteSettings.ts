import { IPageCover } from '@Interfaces/pageCover';

export interface IFooter {
    footerLink: string;
    footerText: string;
    footerType: string;
}

interface ISiteSettings {
    footer?: IFooter[];
    header?: IPageCover[];
}

export default ISiteSettings;
