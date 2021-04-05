export interface IHomepageImage {
    alignment: string;
    alt: string;
    caption?: string;
    image: any;
    height: number;
    width: number;
}

export interface IHomepageData {
    body: [];
    figure?: IHomepageImage;
}
