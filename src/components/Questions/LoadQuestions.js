import React from 'react';

const LoadQuestions = ({ item }) => {
    const {question, options} = item;
    return (
        <div className='bg-slate-200 py-8'>
            <div className='bg-slate-400 text-xl p-4 w-1/2 m-auto'>
                <h2>{question}</h2>
            </div>
            <div className='grid grid-cols-2 border bg-slate-200 w-1/2 m-auto'>
                <div><input type="radio" name='opt1' id='01'/>{options[0]}</div>
                <br></br>
                <div><input type="radio" name='opt1' id='02'/>{options[1]}</div>
                <br></br>
                <div><input type="radio" name='opt1' id='03'/>{options[2]}</div>
                <br></br>
                <div><input type="radio" name='opt1' id='04'/>{options[3]}</div>
                
            </div>
        </div>
    );
};

export default LoadQuestions;