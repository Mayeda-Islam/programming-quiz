import React from "react";
import { Form } from "react-bootstrap";

const Option = ({ options, handleRightAnswer, id }) => {
  return (
    <div>
          <Form>
      
          <Form.Check type='radio' id={`check-api-radio`}>
            <Form.Check.Input type='radio' reverse/>
            <Form.Check.Label>{options}</Form.Check.Label>
          </Form.Check>
    </Form>


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
    </div>
  );
};

export default Option;
<p>this is option</p>;
