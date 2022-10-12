import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
import './Home.css'
const Home = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;
    
    return (
        <div className='home-container bg-slate-200	'>
            {
                <img className='header-img' src={'https://i.pinimg.com/736x/08/3b/26/083b267734c4ede29bfc2623ee5da185.jpg'} alt="Hero-Bg" />
            }
            <div id='card-design' className='grid grid-cols-4 py-10'>
                {
                    quizTopics.map(topic => <QuizTopics
                        key={topic.id}
                        topic={topic}
                    ></QuizTopics>)
                }
            </div>
        </div>
    );
};

export default Home;