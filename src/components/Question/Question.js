import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import Option from '../Option/Option';

const Question = ({question ,id}) => {
    const quizQuestion =question.question
    const quizOption =question.options
    const correctAnswer =question.correctAnswer
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
    const handleShowRightAnswer =(correctAnswer)=>{
        
            swal({
                title:correctAnswer, 
                button: true,
              })
         
    }
    
    const handleRightAnswer=(optionValue)=>{
        if(optionValue===correctAnswer){
            answerToast(true)
        }
        else{
            answerToast(false)
        }
    }
    return (
        <div className='container  position-relative w-75 mx-auto'>
            <div className=' w-50  mx-auto '>
            <h4 className=''>Quiz-1 : {quizQuestion}</h4>
            <EyeIcon onClick={()=>handleShowRightAnswer(correctAnswer)} className='position-absolute top-0 start-100' style={{width:'30px',}}></EyeIcon>
            </div>
            <div className='row row-cols-2'>
            {
                quizOption.map(options=><Option options={options} id={id}  handleRightAnswer={handleRightAnswer}  key={options.id}></Option>)
            }
            </div>
            
        </div>
    );
};

export default Question;