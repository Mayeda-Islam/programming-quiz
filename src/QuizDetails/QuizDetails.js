import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../components/Question/Question";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const { name, total, questions } = quizDetails.data;
  return (
    <div style={{color: "#AED581"}} className="container text-center mt-5">
      <h3>Quiz of {name}</h3>
      <h4>Total questions : {total}</h4>
      {questions.map((question) => (
        <Question question={question} id={question.id} key={question.id}></Question>
      ))}
    </div>
  );
};

export default QuizDetails;
<h4>this is details</h4>;
