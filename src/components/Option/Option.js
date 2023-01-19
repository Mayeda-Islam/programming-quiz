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