import AppLayout from '@Components/AppLayout';
import BlogCards from '@Components/BlogCards';
import { GetStaticProps } from 'next';
import { getBlogsByCategory } from '@Api/blogsCategory';
import { getNumberOfBlogs } from '@Api/numberOfBlogs';
import IBlogs from '@Interfaces/blogs';
import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { event as gtmEvent } from '@Service/googleService';
import { useQuery } from 'react-query';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TablePagination from '@material-ui/core/TablePagination';
import { ReactQueryDevtools } from 'react-query/devtools';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        investingBlogsDataSSR: await getBlogsByCategory('investing'),
        investingBlogsCount: await getNumberOfBlogs('investing'),
        programmingBlogsDataSSR: await getBlogsByCategory('programming'),
        programmingBlogsCount: await getNumberOfBlogs('programming'),
        miscellaneousBlogsData: await getBlogsByCategory('miscellaneous'),
        miscellaneousBlogsCount: await getNumberOfBlogs('miscellaneous')
    },
    revalidate: 3600
});

const a11yProps = (index: any) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
});

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
            {value === index && <p>{children}</p>}
        </div>
    );
};

const Blogs: FC<{
    investingBlogsDataSSR: IBlogs[];
    investingBlogsCount: number;
    programmingBlogsDataSSR: IBlogs[];
    programmingBlogsCount: number;
    miscellaneousBlogsData: IBlogs[];
    miscellaneousBlogsCount: number;
}> = ({
    investingBlogsDataSSR,
    investingBlogsCount,
    programmingBlogsDataSSR,
    programmingBlogsCount,
    miscellaneousBlogsData,
    miscellaneousBlogsCount
}) => {
        const router = useRouter();

        const [tab, setTab] = useState(0);
        const [screenSize, setScreenSize] = useState(1000);

        const fetchBlogs = async (category = 'programming', page = 0) => {
            const data = await fetch(`/api/blogsCategory?category=${category}&page=${page}`);
            return data.json();
        };

        const [programmingPage, setProgrammingPage] = useState(0);
        const [programmingRowsPerPage, setProgrammingRowsPerPage] = useState(10);
        const [useProgrammingBlogsSSR, setUseProgrammingBlogsSSR] = useState(true);
        const { data: programmingBlogsData } = useQuery(
            ['programmingBlogsData', programmingPage],
            () => {
                if (useProgrammingBlogsSSR) {
                    return programmingBlogsDataSSR;
                }
                return fetchBlogs('programming', programmingPage);
            },
            { keepPreviousData: true }
        );

        const handleProgrammingChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
            setUseProgrammingBlogsSSR(false);
            setProgrammingPage(newPage);
        };

        const handleProgrammingChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setUseProgrammingBlogsSSR(false);
            setProgrammingRowsPerPage(parseInt(event.target.value, 10));
            setProgrammingPage(0);
        };

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
                                scrollButtons="on"
                                className=" bg-purple-600 dark:bg-blue-900 text-white"
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
                            {useProgrammingBlogsSSR ? (
                                <BlogCards blogsData={programmingBlogsDataSSR} />
                            ) : (
                                    <BlogCards blogsData={programmingBlogsData} />
                                )}

                            <TablePagination
                                component="div"
                                count={programmingBlogsCount}
                                page={programmingPage}
                                onChangePage={handleProgrammingChangePage}
                                rowsPerPage={programmingRowsPerPage}
                                onChangeRowsPerPage={handleProgrammingChangeRowsPerPage}
                                rowsPerPageOptions={[10, 25, 50, 100]}
                                className="text-black dark:text-white"
                            />
                            <ReactQueryDevtools initialIsOpen />
                        </TabPanel>
                        <TabPanel value={tab} index={1}>
                            <BlogCards blogsData={investingBlogsDataSSR} />
                        </TabPanel>
                        <TabPanel value={tab} index={2}>
                            <BlogCards blogsData={miscellaneousBlogsData} />
                        </TabPanel>
                    </div>
                </AppLayout>
            </>
        );
    };

export default Blogs;
