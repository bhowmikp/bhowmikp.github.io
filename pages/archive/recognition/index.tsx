import React, { FC } from 'react';
import AppLayout from '@Components/AppLayout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const config = { amp: 'hybrid' };

const rows = [
    { id: 1, position: '1st Place', organization: 'RBC Amplify', year: 2019 },
    { id: 2, position: '2nd Place', organization: 'Facebook University Coding Chalenge', year: 2018 },
    { id: 3, position: '3rd Place', organization: 'Microsoft University Coding Challenge', year: 2017 },
    { id: 4, position: '4th Place', organization: 'UofT The Hub Startup Challenge', year: 2017 },
    { id: 5, position: '5th Place', organization: 'University of Michigan MHacks 8	', year: 2016 },
    { id: 6, position: '3rd Place', organization: 'University of Toronto Finance Hacks', year: 2016 }
];

const archive: FC = () => (
    <AppLayout title="Recognition">
        <div className="mx-5 mb-10">
            <p className="text-2xl font-extrabold">Recognition</p>

            <TableContainer className="recognition-table">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <span className="recognition-table-header">Position</span>
                            </TableCell>
                            <TableCell className="recognition-table-header">
                                <span className="recognition-table-header">Organization</span>
                            </TableCell>
                            <TableCell className="recognition-table-header">
                                <span className="recognition-table-header">Year</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <span className="recognition-table-cell">{row.position}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="recognition-table-cell">{row.organization}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="recognition-table-cell">{row.year}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </AppLayout>
);

export default archive;
