import AppLayout from '@Components/AppLayout';
import BlogCards from '@Components/BlogCards';
import { GetStaticProps } from 'next';
import { getBlogsByCategory } from '@Api/blogsCategory';
import IBlogs from '@Interfaces/blogs';
import React, { FC, useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        investingBlogsData: await getBlogsByCategory('investing'),
        programmingBlogsData: await getBlogsByCategory('programming'),
        miscellaneousBlogsData: await getBlogsByCategory('miscellaneous')
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

const Blogs: FC<{ investingBlogsData: IBlogs[]; programmingBlogsData: IBlogs[]; miscellaneousBlogsData: IBlogs[] }> = ({
    investingBlogsData,
    programmingBlogsData,
    miscellaneousBlogsData
}) => {
    const [value, setValue] = useState(0);
    const [screenSize, setScreenSize] = useState(1000);

    // eslint-disable-next-line @typescript-eslint/ban-types
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        setScreenSize(screen.width);
    }, []);

    return (
        <>
            <AppLayout title="Blogs">
                <div className="mx-5 mb-10">
                    <AppBar position="static" className="mt-3">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                            variant={screenSize > 640 ? 'fullWidth' : 'scrollable'}
                            scrollButtons="on"
                            className=" bg-purple-600 dark:bg-blue-900 text-white"
                        >
                            <Tab label="Programming" {...a11yProps(0)} />
                            <Tab label="Investing" {...a11yProps(1)} />
                            <Tab label="Miscellaneous" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <BlogCards blogsData={programmingBlogsData} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BlogCards blogsData={investingBlogsData} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <BlogCards blogsData={miscellaneousBlogsData} />
                    </TabPanel>
                </div>
            </AppLayout>
        </>
    );
};

export default Blogs;
