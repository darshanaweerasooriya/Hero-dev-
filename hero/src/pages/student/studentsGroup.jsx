import React, {useState, useEffect, useRef} from "react";
import testimage from "../../assests/images/classroomtest.jpg"
function Sgroup() {

    return(
        <div className="container">
        <div className="row">
          {/* Left Section (Wider - 8 columns) */}
          <div className="col-md-8 leftcontainer p-3 mt-4">
          <div className="card">
        <div className="card-body position-relative">

        <button
      type="button"
      className="btn position-absolute"
      style={{
        top: "10px",
        right: "10px",  // <-- changed from left to right
        backgroundColor: "#9C6FE4",
        borderColor: "#9C6FE4",
        color: "white",
        padding: "3px 7px",
        fontSize: "0.85rem",
        height: "32px"
      }}
    >
      Join
    </button>
          {/* Make this a flex row */}
          <div className="d-flex align-items-center">
            <img
              src={testimage}
              className="img-fluid custom-pimg ms-2"
              alt="testimage"
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
            />
             <div className="d-flex flex-column ms-3">
            <label className="mb-1">Group 01</label>
            <p className="mb-0">
            Group num1 aadldld dldlgl ldlrlfdld dlrlrle flgtlgtlt lgogkgeo fek fbpmpm dfbkmdpbg
            </p>
        </div>
           
          </div>
        </div>
      </div>
                    
  
            
          </div>
  
          {/* Right Section (Smaller - 4 columns) */}
          <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
          hii
          </div>
          
        </div>
      </div>

    );
}

export default Sgroup;