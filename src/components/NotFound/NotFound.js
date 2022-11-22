import React from 'react';
import img from '../images/404.png'
const NotFound = () => {
    return (
        <div style={{
            backgroundImage: `url(${img})`,
            widows:'100px',
            height: '100vh',
            backgroundRepeat: " no-repeat",
            backgroundSize: "cover",
          }}>
            
        </div>
    );
};

export default NotFound