import { IPageCover } from '@Interfaces/pageCover';

export interface IArchiveData {
    heading: IPageCover;
    archiveListTitle: string;
    archives: {
        archiveLabel: string;
        archiveLink: string;
        _key: string;
    }[];
}
