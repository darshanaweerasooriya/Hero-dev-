import React from "react";
import './parentlogin.css';
import passwordImg from '../../../assests/images/Password-Reset.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function reserPassword() {  
    return (
        <div className="row" style={{ display: "flex", height: "100vh" }}>
            <div className="container leftSide d-flex flex-column w-100 md-5 " style={{ flex: 1 }}>
                {/* <h1 className="mt-4 mb-2 ms-4">Login to HERO</h1>
                <p className="mb-2 ms-4">let's Monitor your child with us</p> */}

                <div className="d-flex flex-column ms-4 pt-5 mt-4"> 
                    <div className="mt-5"><p>Enter your New Password here</p></div>
                </div>

                <div className="">
                    <form className="sdetails ms-4">

                    <div className="mb-2">
                            <input 
                                type="password" 
                                placeholder="Enter your Password"
                                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75"
                                id="exampleInputPassword1"
                            />
                        </div>

                        <div className="mb-2">
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your username"
                                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75" 
                            />
                           
                        </div>
                        

                        
                        
                         <Link to="/logoBar">
                             <button type="submit" className="btn btn-primary btn-sm w-75 mt-3" 
                             style={{ backgroundColor: "#648DDB", borderColor: "#648DDB", color: "white", width: 100 }}>
                             Submit
                             </button>
                         </Link>
                    </form>
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

export default reserPassword;  