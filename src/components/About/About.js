import React from 'react';

const About = () => {
    return (
        <div style={{backgroundColor: "#AED581",height:'100vh'}} >
            <div className='container pt-5'>
            <h3>Programming Quizz</h3>
            <p>Programming quizz website is created by using:</p>
            <ul><li>
                React
            </li>
            <li>
                React router
            </li>
            <li>
                Bootstrap</li></ul>
            <p>Features are</p>
            <ul>
                <li>Single page Website</li>
                <li>Statistics page has 4 types of chart using Api</li>

                <li>Home page has differeent kinds of cards,which has a button.the button take you to next page of quiz</li>
                <li>In quiz section you can check your programming knowledge</li>
            </ul>
            </div>
        </div>
    );
};

export default About