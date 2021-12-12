import { ICta } from './cta';
import { IBlogsOverviewData } from './blogs/blogsOverviewData';

export interface ICtaBlogs {
    title: string;
    blog: IBlogsOverviewData[];
    cta: ICta;
}
