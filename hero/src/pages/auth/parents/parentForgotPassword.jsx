import React from "react";
import './parentlogin.css';
import passwordImg from '../../../assests/images/Password-Reset.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function pEmail() {  
    return (
        <div className="row" style={{ display: "flex", height: "100vh" }}>
            <div className="container leftSide d-flex flex-column w-100 md-5 " style={{ flex: 1 }}>
                {/* <h1 className="mt-4 mb-2 ms-4">Login to HERO</h1>
                <p className="mb-2 ms-4">let's Monitor your child with us</p> */}

                <div className="d-flex flex-column ms-4 pt-5 mt-4"> 
                    <div className="mt-5"><p>Enter your Email address</p></div>
                </div>

                <div className="">
                    <form className="sdetails ms-4">
                        <div className="mb-2">
                           <p>Your email has been confirmed clicked the continue button to change your password</p>
                           
                        </div>
                         <Link to="/resetPassword">
                             <button type="submit" className="btn btn-primary btn-sm w-75 mt-3" 
                             style={{ backgroundColor: "#648DDB", borderColor: "#648DDB", color: "white", width: 100 }}>
                             Submit
                             </button>
                         </Link>
                    </form>
                </div>

                <div className="mb-2 mt-5 ms-4" >
                 You will recieve a confirmation code to reset your password
                </div>
            </div>

            <div className="container rightSide d-flex flex-column" style={{ flex: 1, height: "100vh" }}>
                <h1 style={{ color: "white", fontSize: "9vh", fontWeight: "bold" }} className="mt-2">
                    Let's Rest your
                </h1>
                <h2 style={{ color: "white", fontSize: "7vh" }} className="mt-6">
                    Old password
                </h2>
                <p style={{ color: "white"}}>remeber your password please</p>
                <img src={passwordImg} className="pt-2" style={{ width: 450 }} alt="Student Portal" />
            </div>
        </div>
    );
}

export default pEmail;  