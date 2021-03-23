import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import BlogCards from '@Components/BlogCards';
import TablePagination from '@material-ui/core/TablePagination';
import IBlogs from '@Interfaces/blogs';

const BlogsTab: FC<{
    blogsCount: number;
    blogsDataSSR: IBlogs[];
    categoryOfBlog: string;
}> = ({ blogsDataSSR, blogsCount, categoryOfBlog }) => {
    const fetchBlogs = async (category, page = 0, blogCount = 10) => {
        const data = await fetch(`/api/blogsCategory?category=${category}&page=${page}&blogCount=${blogCount}`);
        return data.json();
    };

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [useBlogsSSR, setUseBlogsSSR] = useState(true);
    const { data: blogsData } = useQuery(
        ['blogsData', page, rowsPerPage],
        () => {
            if (useBlogsSSR) {
                return blogsDataSSR;
            }
            return fetchBlogs(categoryOfBlog, page, rowsPerPage);
        },
        { keepPreviousData: true }
    );

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setUseBlogsSSR(false);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUseBlogsSSR(false);
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <div className="blog-card-area-min-height">
                {useBlogsSSR ? <BlogCards blogsData={blogsDataSSR} /> : <BlogCards blogsData={blogsData} />}
            </div>

            <TablePagination
                component="div"
                count={blogsCount}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 25, 50, 100]}
                className="text-black dark:text-white"
            />
        </>
    );
};

export default BlogsTab;
