import React from "react";
import './welcome.css';
import myimage from '../../assests/images/welcome.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Welcome() {

   
    return (
        <div className="row" style={{ display: "flex", height: "100vh" }}>
        <div className="container leftSide d-flex flex-column " style={{ flex: 1 }}>

         <h1 className="mt-4 mb-2 ms-4">Welcome to HERO</h1>
        <p className="mb-4 ms-4 ">Let's discover the talents of the students in our school</p>
      

        
        <div className="d-flex flex-column ms-4 pt-5 mt-4"> 
        <div className="mt-5"><p>Select your role in the webssite loginParent</p></div>
       
        </div>
        <div className="ms-4">
        <Link to="/loginParent">
        <button type="button" className="btn w-30 mb-4 ms-4" style={{ backgroundColor: "#D27EEF", borderColor: "#D27EEF", color: "white" }}>
            Parent Login 
        </button>
        </Link>
       <Link to="/loginStudent">
       <button type="button" className="btn w-30 mb-4 ms-4" style={{ backgroundColor: "#D27EEF", borderColor: "#D27EEF", color: "white" }}>
            Student Login 
        </button>
       </Link>
        <Link to="/loginTeachers">
        <button type="button" className="btn w-30 mb-4 ms-4" style={{ backgroundColor: "#D27EEF", borderColor: "#D27EEF", color: "white" }}>
            Teacher Login 
        </button>
        </Link>
        </div>
         </div>
       
         <div className="container rightSide d-flex flex-column" style={{ flex: 1, height: "100vh" }}>
            <h1 style={{ color: "white", fontSize: "10vh", fontWeight: "bold" }} className="mt-2">
               Welcome to
            </h1>
            <h2 style={{ color: "white", fontSize: "7vh" }} className="mt-6">
               Student Portal
            </h2>
            <p style={{ color: "white"}}>Log in to access your account</p>
            <img src={myimage} className="pt-5" style={{ width: 450 }} alt="Student Portal" /> </div>
      </div>
    );
}

export default Welcome;
