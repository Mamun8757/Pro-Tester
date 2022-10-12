import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadQuestions from './LoadQuestions';

const Questions = () => {
    const loaderQuestions = useLoaderData();
    const questions = loaderQuestions.data.questions;
    console.log(questions);
    return (
        <div>
            {
                questions.map(item => <LoadQuestions
                    key={item.id}
                    item={item}
                ></LoadQuestions>)
            }
        </div>
    );
};

export default Questions;