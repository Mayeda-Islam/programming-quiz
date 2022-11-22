import React from "react";
import { Form } from "react-bootstrap";

const Option = ({ option, handleRightAnswer, id, name }) => {
  console.log(id);
  return (
    <div className="col">
        <Form.Check onClick={() => handleRightAnswer(option, id)} inline label={option} name={name} type="radio" id={id} />
    </div>
        
      
  );
};

export default Option;
{/* <Form.Check
            onClick={() => handleRightAnswer(options, id)}
            className="border py-2 m-3 px-3 rounded-3"
              type={"radio"}
              
              label={options}
            /> */}
      {/* 
      <button
        style={{ color: "#AED581" }}
        onClick={() => handleRightAnswer(options, id)}
        className="border py-2  px-3 border-2 rounded-3"
      >
        {options}
      </button> */}