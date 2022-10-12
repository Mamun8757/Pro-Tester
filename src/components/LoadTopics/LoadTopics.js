import React from 'react';
import { Link } from 'react-router-dom';

const LoadTopics = ({item}) => {
    const { logo, name, total, id } = item;
    return (
        <div className='topics border border-slate-400 '>
            <img src={logo} alt="" />
            <div className='bg-cyan-300'>
                <div className='text-center'><h2>Total Questions:{total}</h2></div>
                <div className='card-items'>
                    <h2>{name}</h2>
                    <Link to={`/questions/${id}`} > 
                        <button className='border border-orange-600 rounded p-1 bg-orange-600 text-white'> Start Quiz </button> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoadTopics;