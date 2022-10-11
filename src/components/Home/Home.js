import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';

const Home = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;
    
    return (
        <div>
            {
                <img src={'https://i.pinimg.com/736x/08/3b/26/083b267734c4ede29bfc2623ee5da185.jpg'} alt="Hero-Bg" />
            }
            {
                quizTopics.map(topic => <QuizTopics
                key={topic.id}
                topic={topic}
                ></QuizTopics>)
            }
        </div>
    );
};

export default Home;