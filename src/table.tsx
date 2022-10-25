import React from "react";
import "./table.css";


type Swing = {
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
        clubName: 'G425 Max',
        clubType: '5 iron',
        brand: 'Ping',
        ballSpeed: 110,
        spin: 4689,
        launchAngle: 26,
        distance: 232
    },
    {
        clubName: 'G425',
        clubType: '5 hybird',
        brand: 'Ping',
        ballSpeed: 120,
        spin: 4760,
        launchAngle: 29,
        distance: 241
    },
    {
        clubName: 'G425 Max',
        clubType: '4 iron',
        brand: 'Ping',
        ballSpeed: 123,
        spin: 4837,
        launchAngle: 21,
        distance: 259
    },
    {
        clubName: 'G425',
        clubType: '4 hybird',
        brand: 'Ping',
        ballSpeed: 133,
        spin: 4904,
        launchAngle: 23,
        distance: 271
    }
];

function TestTable() {
    return (
        <div></div>
    );
}

export default TestTable;