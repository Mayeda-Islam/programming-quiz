import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizTopic =useLoaderData()
    return (
        <div className=' mt-5 d-flex align-items-center justify-content-around'>
          {quizTopic.data.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)}  
        </div>
    );
};

export default Home