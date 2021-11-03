import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import { getBlogsByCategory } from '@Api/blog/blogsCategory';
import { getNumberOfBlogs } from '@Api/blog/numberOfBlogs';
import { IBlogs } from '@Interfaces/blogs';
import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { event as gtmEvent } from '@Service/googleService';
import BlogsTab from '@Components/BlogsTab';

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { time as timeConstants } from '@Constants';

// export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        investingBlogsDataSSR: await getBlogsByCategory('investing'),
        investingBlogsCount: await getNumberOfBlogs('investing'),
        programmingBlogsDataSSR: await getBlogsByCategory('programming'),
        programmingBlogsCount: await getNumberOfBlogs('programming'),
        miscellaneousBlogsDataSSR: await getBlogsByCategory('miscellaneous'),
        miscellaneousBlogsCount: await getNumberOfBlogs('miscellaneous')
    },
    revalidate: timeConstants.oneHourInSeconds
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const a11yProps = (index: any) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TabPanel = (props: { children: React.ReactNode; index: any; value: any }) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
};

const Blogs: FC<{
    investingBlogsDataSSR: IBlogs[];
    investingBlogsCount: number;
    programmingBlogsDataSSR: IBlogs[];
    programmingBlogsCount: number;
    miscellaneousBlogsDataSSR: IBlogs[];
    miscellaneousBlogsCount: number;
}> = ({
    investingBlogsDataSSR,
    investingBlogsCount,
    programmingBlogsDataSSR,
    programmingBlogsCount,
    miscellaneousBlogsDataSSR,
    miscellaneousBlogsCount
}) => {
    const router = useRouter();

    const [tab, setTab] = useState(0);
    const [screenSize, setScreenSize] = useState(1000);

    // eslint-disable-next-line @typescript-eslint/ban-types
    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        setScreenSize(screen.width);
    }, []);

    useEffect(() => {
        switch (router.query.category) {
            case 'programming':
                setTab(0);
                break;
            case 'investing':
                setTab(1);
                break;
            case 'miscellaneous':
                setTab(2);
                break;
            default:
                break;
        }
    }, [router.query]);

    return (
        <>
            <AppLayout title="Blogs">
                <div className="mx-5 mb-10">
                    <AppBar position="static" className="mt-3">
                        <Tabs
                            value={tab}
                            onChange={handleTabChange}
                            aria-label="simple tabs example"
                            variant={screenSize > 640 ? 'fullWidth' : 'scrollable'}
                            className="bg-purple-600 dark:bg-blue-900 text-white"
                        >
                            <Tab
                                label="Programming"
                                {...a11yProps(0)}
                                onClick={() => {
                                    router.push('/blogs', '/blogs?category=programming', { shallow: true });
                                    gtmEvent({ name: 'blogItem', category: 'tab', label: 'programming' });
                                }}
                            />
                            <Tab
                                label="Investing"
                                {...a11yProps(1)}
                                onClick={() => {
                                    router.push('/blogs', '/blogs?category=investing', { shallow: true });
                                    gtmEvent({ name: 'blogItem', category: 'tab', label: 'investing' });
                                }}
                            />
                            <Tab
                                label="Miscellaneous"
                                {...a11yProps(2)}
                                onClick={() => {
                                    router.push('/blogs', '/blogs?category=miscellaneous', { shallow: true });
                                    gtmEvent({ name: 'blogItem', category: 'tab', label: 'miscellaneous' });
                                }}
                            />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={tab} index={0}>
                        <BlogsTab
                            blogsDataSSR={programmingBlogsDataSSR}
                            blogsCount={programmingBlogsCount}
                            categoryOfBlog="programming"
                        />
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <BlogsTab
                            blogsDataSSR={investingBlogsDataSSR}
                            blogsCount={investingBlogsCount}
                            categoryOfBlog="investing"
                        />
                    </TabPanel>
                    <TabPanel value={tab} index={2}>
                        <BlogsTab
                            blogsDataSSR={miscellaneousBlogsDataSSR}
                            blogsCount={miscellaneousBlogsCount}
                            categoryOfBlog="miscellaneous"
                        />
                    </TabPanel>
                </div>
            </AppLayout>
        </>
    );
};

export default Blogs;
