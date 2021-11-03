import { IParagraphs } from '@Interfaces/paragraph';

export interface IHeading {
    header: string;
    description: string;
}

export interface IExperienceData {
    heading: IHeading;
    paragraphs: IParagraphs[];
}
