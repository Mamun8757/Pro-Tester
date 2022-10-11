import React from 'react';

const QuizTopics = ({topic}) => {
    const { logo, name, total } = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <h2>Total Questions:{total}</h2>
            <button>Start Quiz</button>
        </div>
    );
};

export default QuizTopics;