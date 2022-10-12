import React from 'react';
import { Link } from 'react-router-dom';

const LoadTopics = ({item}) => {
    const { logo, name, total, id } = item;
    return (
        <div className='topics border border-slate-400 '>
            <img src={logo} alt="" />
            <div className='bg-blue-800'>
                <div className='text-center text-white'><h2>Total Questions:{total}</h2></div>
                <div className='card-items'>
                    <h2 className='text-white'>{name}</h2>
                    <Link to={`/questions/${id}`} > 
                        <button className='border border-gray rounded p-1 text-white mr-1'> Start Quiz </button> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoadTopics;