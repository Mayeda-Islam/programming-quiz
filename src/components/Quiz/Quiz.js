import React from "react";
import { ArrowDownLeftIcon, ArrowLeftCircleIcon, ArrowRightIcon, BeakerIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quiz }) => {
  const { name, logo, total } = quiz;
  return (
    <div>
      <div className="shadow-lg p-3 rounded-3">
        <img
          style={{ backgroundColor: "#AED581", width: "200px" }}
          className="rounded-3"
          src={logo}
          alt=""
        />
        <div className="d-flex  align-items-center justify-content-between ">
          <p className="fw-bold mt-3">{name}</p>
          <button style={{ backgroundColor: "#AED581"}} className="text-white fw-bold border-0 rounded-1 py-1 px-2">Start quiz
           <ArrowRightIcon style={{width:'20px'}} ></ArrowRightIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
