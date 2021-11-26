export interface IPageCoverStepper {
    stepperLabel: string;
    stepperLink: string;
    _key: string;
}

export interface IPageCover {
    header: string;
    description: string;
    pageStepper?: IPageCoverStepper[];
}
