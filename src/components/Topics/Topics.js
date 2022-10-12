import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadTopics from '../LoadTopics/LoadTopics';
import './Topics.css'
const Topics = () => {
    const loaderData = useLoaderData();
    const topics = loaderData.data;
    return (
        <div id='topics-design' className='grid grid-cols-4 py-10 bg-slate-200'>
            {
                topics.map(item => <LoadTopics
                key={item.id}
                item={item}
                ></LoadTopics>)
            }
        </div>
    );
};

export default Topics;

