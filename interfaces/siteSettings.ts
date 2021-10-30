export interface IFooter {
    footerLink: string;
    footerText: string;
    footerType: string;
}

export interface IHeader {
    headerLink: string;
    headerText: string;
}

interface ISiteSettings {
    footer?: IFooter[];
    header?: IHeader[];
}

export default ISiteSettings;
