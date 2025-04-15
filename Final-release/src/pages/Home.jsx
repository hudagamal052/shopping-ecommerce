import React from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {
   const location=useLocation();

    return (
    
        <div>
            
            Home page
            <h2>{location.state}</h2>
        </div>
    );
}

export default Home;
