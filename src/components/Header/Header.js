import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    backgroundColor: "#7CB342",
    color:'white',
    borderRadius:'10px'
  };
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
      <div class="container">
        <NavLink  to={"/"} 
            className="navbar-brand">
          Programming Quizz
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-end collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <NavLink to={"/"}  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav-link">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/about"}  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav-link">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/statistics"}  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav-link">
                Statistics
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/blog"}  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <div className=" shadow-lg h-50">
<Nav  className="d-flex align-items-center container justify-content-between " >
   <div >
       <h4>Programming Quizz </h4>
   </div>
   <div className=" " >
   <NavLink to={'/'}  
       className="nav-link" >Home</NavLink>
   <NavLink to={'/about'} className="nav-link">About</NavLink>
   <NavLink to={'/statistics'} className="nav-link">Statistics</NavLink>
   <NavLink to={'/blog'} className="nav-link">Blog</NavLink>
   </div>
 </Nav> */
}
