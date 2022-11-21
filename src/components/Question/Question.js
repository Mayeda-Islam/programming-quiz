import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import Option from '../Option/Option';

const Question = ({question ,id}) => {
    const answerToast=(value)=>{
        value?swal({
            title: "Good job!",
            text: "Your answer is correct ",
            icon: "success",
          }):
          swal({
            title: "Wrong!",
            text: "Your answer is wrong!",
            icon: "warning",
          });
        
    }
    const quizQuestion =question.question
    const quizOption =question.options
    const correctAnswer =question.correctAnswer
    const handleRightAnswer=(optionValue,id)=>{
        if(optionValue===correctAnswer){
            answerToast(true)
        }
        else{
            answerToast(false)
        }
    }
    return (
        <div className='container w-75 mx-auto'>
            <h4 className=''>Quiz-1 : {quizQuestion}</h4>
            
            <div className='row row-cols-2'>
            {
                quizOption.map(options=><Option options={options} id={id}  handleRightAnswer={handleRightAnswer}  key={options.id}></Option>)
            }
            </div>
            
        </div>
    );
};

export default Question;