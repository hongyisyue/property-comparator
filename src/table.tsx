import MaterialTable from "material-table";
import React from "react";
import "./table.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type Swing = {
    id: number,
    clubName: string,
    clubType: string,
    brand: string,
    ballSpeed: number,
    spin: number,
    launchAngle: number,
    distance: number
};


const swingTests: Swing[] = [
    {
        id: 1,
        clubName: 'G425 Max',
        clubType: '5 iron',
        brand: 'Ping',
        ballSpeed: 110,
        spin: 4689,
        launchAngle: 26,
        distance: 232
    },
    {
        id: 2,
        clubName: 'G425',
        clubType: '5 hybird',
        brand: 'Ping',
        ballSpeed: 120,
        spin: 4760,
        launchAngle: 29,
        distance: 241
    },
    {
        id: 3,
        clubName: 'G425 Max',
        clubType: '4 iron',
        brand: 'Ping',
        ballSpeed: 123,
        spin: 4837,
        launchAngle: 21,
        distance: 259
    },
    {
        id: 4,
        clubName: 'G425',
        clubType: '4 hybird',
        brand: 'Ping',
        ballSpeed: 133,
        spin: 4904,
        launchAngle: 23,
        distance: 271
    }
];

const cols: GridColDef[] =
    [
        { field: 'clubName', headerName: 'Club Name', width: 130 },
        { field: 'clubType', headerName: 'Club Type', width: 130 },
        {
            field: 'brand',
            headerName: 'Brand',
            type: 'number',
            width: 90,
        },
        {
            field: 'ballSpeed',
            headerName: 'Ball Speed',
            type: 'number',
            width: 90,
        },
        {
            field: 'spin',
            headerName: 'Spin',
            type: 'number',
            width: 90,
        },
        {
            field: 'launchAngle',
            headerName: 'Launch Angle',
            type: 'number',
            width: 90,
        },
        {
            field: 'distance',
            headerName: 'Distance',
            type: 'number',
            width: 90,
        }
    ];
function TestTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={swingTests}
                columns={cols}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default TestTable;