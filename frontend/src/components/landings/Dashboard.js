import React, { Fragment } from 'react';
import Logs from './Logs';
import Forms from './Forms';

export default function Dashboard() {
    return (
        <Fragment>
            <Logs />
            <Forms />
        </Fragment>
    );
}