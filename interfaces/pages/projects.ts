import { IParagraphs } from '@Interfaces/paragraph';

export interface IHeading {
    header: string;
    description: string;
}

export interface IProjectsData {
    heading: IHeading;
    paragraphs: IParagraphs[];
}
