export interface IHomepageImage {
    alignment: string;
    alt: string;
    caption?: string;
    image: any;
}

export interface IHomepageData {
    body: [];
    figure?: IHomepageImage;
}
