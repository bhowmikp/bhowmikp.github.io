import React, { FC } from 'react';
import AppLayout from '@Components/AppLayout';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

export const config = { amp: 'hybrid' };

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    {
        field: 'position',
        headerName: 'Position',
        cellClassName: 'text-primary',
        headerClassName: 'recognition-table-header',
        align: 'left',
        flex: 1
    },
    {
        field: 'organization',
        headerName: 'Organization',
        headerClassName: 'recognition-table-header',
        cellClassName: 'recognition-table-cell',
        align: 'left',
        flex: 2
    },
    {
        field: 'year',
        headerName: 'Year',
        headerClassName: 'recognition-table-header',
        cellClassName: 'text-primary',
        align: 'left',
        flex: 1
    }
];

const rows = [
    { id: 1, position: '1st Place', organization: 'RBC Amplify', year: 2019 },
    { id: 2, position: '2nd Place', organization: 'Facebook University Coding Chalenge', year: 2018 },
    { id: 3, position: '3rd Place', organization: 'Microsoft University Coding Challenge', year: 2017 },
    { id: 4, position: '4th Place', organization: 'UofT The Hub Startup Challenge', year: 2017 },
    { id: 5, position: '5th Place', organization: 'University of Michigan MHacks 8	', year: 2016 },
    { id: 6, position: '3rd Place', organization: 'University of Toronto Finance Hacks', year: 2016 }
];
const archive: FC = () => (
    <AppLayout title="Archive">
        <div className="mx-5 mb-10">
            <p className="text-2xl font-extrabold">Recognition</p>

            <div className="recognition-table">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection={false}
                    autoHeight
                    disableSelectionOnClick
                    disableColumnMenu
                    hideFooterPagination
                    hideFooter
                    density="compact"
                />
            </div>
        </div>
    </AppLayout>
);

export default archive;
