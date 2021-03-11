import React, { FC } from 'react';
import AppLayout from '@Components/AppLayout';

export const config = { amp: 'hybrid' };

const Archieve: FC = () => (
    <AppLayout title="Archieve">
        <div className="mx-5">
            <p className="archieve-options mt-3">CSCD01 2020 Winter (Engineering Large Software Systems)</p>
            <p className="archieve-options">CSCC69 2019 Summer (Operating Systems)</p>
            <p className="archieve-options">CSCC69 2019 Winter (Operating Systems)</p>
            <p className="archieve-options">CSCA08 2019 Fall (Introduction to Computer Science I)</p>
            <p className="archieve-options">CSCB07 2018 Fall (Software Design)</p>
            <p className="archieve-options">CSCA48 2018 Winter (Introduction to Computer Programming II)</p>
            <p className="archieve-options">CSCA08 2017 Fall (Introduction to Computer Science I)</p>
            <p className="archieve-options">CSCA48 2017 Summer (Introduction to Computer Programming II)</p>
            <p className="archieve-options">CSCA48 2017 Winter (Introduction to Computer Programming II)</p>
            <p className="archieve-options">CSCA08 2016 Fall (Introduction to Computer Science I)</p>
        </div>
    </AppLayout>
);

export default Archieve;
