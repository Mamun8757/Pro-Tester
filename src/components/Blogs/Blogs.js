import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container my-4'>
            <div className='text-justify bg-slate-200 container-width p-8'>
                <h2 className='text-2xl'>Q1. What is the purpose of React Router??</h2>
                <h2>Ans: React Router is a standard library for routing in React.It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL </h2>
            </div>
            <div className='text-justify bg-slate-200 container-width p-8'>
                <h2 className='text-2xl'>Q2. How does context API work?</h2>
                <h2>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux </h2>
            </div>
            <div className='text-justify bg-slate-200 container-width p-8'>
                <h2 className='text-2xl'>Q3. Write a short description about useRef.</h2>
                <h2>Ans: he useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .</h2>
            </div>
        </div>
    );
};

export default Blogs;