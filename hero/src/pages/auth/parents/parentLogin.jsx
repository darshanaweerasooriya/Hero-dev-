import React from "react";
import './parentlogin.css';
import myimage from '../../../assests/images/welcome.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Plogin() {  
    return (
        <div className="row" style={{ display: "flex", height: "100vh" }}>
            <div className="container leftSide d-flex flex-column w-100 md-5 " style={{ flex: 1 }}>
                <h1 className="mt-4 mb-2 ms-4">Login to HERO</h1>
                <p className="mb-2 ms-4">let's Monitor your child with us</p>

                <div className="d-flex flex-column ms-4 pt-5 mt-4"> 
                    <div className="mt-5"><p>Enter your Account details</p></div>
                </div>

                <div className="">
                    <form className="sdetails ms-4">
                        <div className="mb-2">
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your username"
                                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75" 
                            />
                           
                        </div>
                        <div className="mb-2">
                            <input 
                                type="password" 
                                placeholder="Enter your Password"
                                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75"
                                id="exampleInputPassword1"
                            />
                        </div>

                        
                        <div className="mb-2">
                           <Link to="/parentsEmail">
                           <label className="small" htmlFor="exampleCheck1">Forgot Password?</label>
                           </Link>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm w-75 mt-3" 
                            style={{ backgroundColor: "#D27EEF", borderColor: "#D27EEF", color: "white", width: 100 }}>
                            Submit
                        </button>
                    </form>
                </div>

                <div className="mb-2 mt-5 ms-4" >
                Don’t have an account?  <Link to="/signupParent"> Sign up</Link>
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
                <img src={myimage} className="pt-5" style={{ width: 450 }} alt="Student Portal" />
            </div>
        </div>
    );
}

export default Plogin;  