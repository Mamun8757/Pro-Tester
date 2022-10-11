import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Statistics = () => {
    const dataCollection = [
        {
            name: "React",
            total: 8,
            amt: 5,
            id: 1
        },
        {
            name: "JavaScript",
            total: 9,
            amt: 10,
            id: 2
        },
        {
            name: "CSS",
            total: 8,
            amt: 10,
            id: 3
        },
        {
            name: "Git",
            total: 11,
            amt: 12,
            id: 4
        }
    ]
    return (
        <div>
            <LineChart
            width={500}
            height={400}
            data = {dataCollection}
            >
                <Line type="monotone" dataKey="total" stroke="#000000" />
                <XAxis dataKey="name" />
                <YAxis dataKey="amt" />
            </LineChart>
        </div>
    );
};

export default Statistics;