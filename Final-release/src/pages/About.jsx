import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const About = () => {
     const {id}=useParams();
     const[data]=useSearchParams();
    
     console.log(data.getAll("country"));
     
     const navigate=useNavigate();
   const handleclick=()=>{
        navigate("/",{state:"haidy"});
     }
    console.log(id);
    return (
        <div>
            About page id{id}
            <br></br>
            <button onClick={handleclick}>go to home</button>
        </div>
    );
}

export default About;
