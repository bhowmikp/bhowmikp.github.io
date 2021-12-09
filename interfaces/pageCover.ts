import { ReactElement } from 'react';

export interface IPageCoverStepper {
    stepperLabel: string;
    stepperLink?: string;
    _key: string;
}

export interface IPageCover {
    header: string;
    description: string;
    pageStepper?: IPageCoverStepper[];
    elementAboveHeader?: ReactElement;
    elementUnderDescription?: ReactElement;
}
