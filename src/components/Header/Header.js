import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    let activeStyle = {
        backgroundColor: '#7CB342',
      };
  return (
   <div className=" shadow-lg h-50">
     <Nav  className="d-flex align-items-center container justify-content-between " >
        <div >
            <h4>Programming Quizz </h4>
        </div>
        <div className=" " >
        <NavLink to={'/'}  
            className="m-2 text-decoration-none fs-5" >Home</NavLink>
        <NavLink to={'/about'} className="m-2 text-decoration-none fs-5">About</NavLink>
        <NavLink to={'/statistics'} className="m-2 text-decoration-none fs-5">Statistics</NavLink>
        <NavLink to={'/blog'} className="m-2 text-decoration-none fs-5">Blog</NavLink>
        </div>
      </Nav>
    
   </div>
      
  );
};

export default Header;
