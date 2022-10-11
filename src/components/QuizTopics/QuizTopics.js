import React from 'react';
import './QuizTopics.css'
const QuizTopics = ({topic}) => {
    const { logo, name, total } = topic;
    return (
        <div className='topics border border-slate-400 '>
            <img src={logo} alt="" />
            <div className='bg-cyan-300'>
                <div className='text-center'><h2>Total Questions:{total}</h2></div>
                <div className='card-items'>
                    <h2>{name}</h2>
                    <button className='border border-purple-500 rounded p-1 bg-purple-500'>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;