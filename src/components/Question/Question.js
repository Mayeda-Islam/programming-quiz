import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Option from "../Option/Option";

const Question = ({ question, id }) => {
  const quizQuestion = question.question;
  const quizOption = question.options;
  const correctAnswer = question.correctAnswer;
  const answerToast = (value) => {
    value
      ? swal({
          title: "Good job!",
          text: "Your answer is correct ",
          icon: "success",
        })
      : swal({
          title: "Wrong!",
          text: "Your answer is wrong!",
          icon: "warning",
        });
  };
  const handleShowRightAnswer = (correctAnswer) => {
    swal({
      title: correctAnswer,
      button: true,
    });
  };

  const handleRightAnswer = (optionValue) => {
    if (optionValue === correctAnswer) {
      answerToast(true);
    } else {
      answerToast(false);
    }
  };
  return (
    <div style={{color: "#AED581"}} className="container shadow-lg p-5 m-4 rounded-3 position-relative w-75 mx-auto">
      <div className=" w-75  mx-auto ">
        <h4 className=" mb-5">Quiz-1 : {quizQuestion}</h4>
        <EyeIcon
          onClick={() => handleShowRightAnswer(correctAnswer)}
          className="position-absolute top-0  end-0 m-3"
          style={{ width: "30px" }}
        ></EyeIcon>
      </div>
      <div  className="row row-cols-2">
        {quizOption.map((option) => (
          <Option
            option={option}
            name={id}
            id={id}
            handleRightAnswer={handleRightAnswer}
            key={option.id}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
