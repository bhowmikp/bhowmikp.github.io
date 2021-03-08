import { IWindow } from '@Interfaces/window';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare const window: IWindow;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
    name,
    category,
    label,
    value
}: {
    name: string;
    category: string;
    label: string;
    value: string;
}): void => {
    window.gtag('event', name, {
        event_category: category,
        event_label: label,
        value
    });
};
