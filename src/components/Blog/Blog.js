import React from "react";

const Blog = () => {
  return (
    <div style={{backgroundColor: "#AED581"}} className='pt-5'>
    <div className="container text-justify pt-5 "  style={{color:'#505050'}}>
    <section >
        <h2>What is the purpose of react router?</h2>
        <p style={{ textAlign:' justify'}}>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </section>
      <section>
        <h2>How does context API works?</h2>
        <p style={{ textAlign:' justify'}}>
          The React Context API is a component structure, which allows us to
          share data across all levels of the application. The main aim of
          Context API is to solve the problem of prop drilling (also called
          "Threading"). The React Context API is a way for a React app to
          effectively produce global variables that can be passed around This is
          the alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
      </section>
      <section>
        <h2>useRef() hooks</h2>
        <p style={{ textAlign:' justify'}}>
          useRef() is a built-in React hook that accepts one argument as the
          initial value and returns a reference. A reference is an object having
          a special property current . useRef returns an object, doesn't cause
          components to re-render, and it's used to reference DOM elements.While
          useState returns the current state and has an updater function that
          updates the state. A very common use case for using useRef is for
          when, suppose you click on a button, and then on its click you want an
          input to come into focus. To do this, we would need to access the DOM
          element of input and then call its function focus() to focus the input
        </p>
      </section>
    </div>
    </div>
  );
};

export default Blog;
