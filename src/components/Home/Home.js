import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import img from "../images/background.jpg";

const Home = () => {
  const quizTopic = useLoaderData();
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: "100vh",
          backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
          objectFit: 'cover',
        }}
      >
        <div className="container pt-5">
        <div style={{ color: "#EDEDED",}} className="text-center  fw-bold fs-5">
          <h2>Programming Quizz</h2>
          <p>
            Test students knowledge on the generations of programming language
            and the stages of program development. Developed by Mayeda Islam.To
            learn more about computer science, review the accompanying lesson on
            What is Programming?Programming is writing computer code to create a
            program, to solve a problem. Programs are created to implement
            algorithms . Algorithms can be represented as pseudocode or a
            flowchart , and programming is the translation of these into a
            computer program.
          </p>
        </div>
        <div className="mt-5 d-flex flex-column flex-md-row align-items-center justify-content-around">
        {quizTopic.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
        </div>
      
      </div>
    </div>
  );
};

export default Home;
