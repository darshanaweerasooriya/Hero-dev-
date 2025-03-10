import React from "react";
import "./sidebar.css";
import heroLogo from "../../src/assests/images/hero.png"


function sidebar() {
    return(
       <div>

<div  style={{
                    backgroundColor: "#648DDB", 
                    height: "7vh", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
                }} 
                className="py-0 a"
            >
                <img src={heroLogo} style={{ width: 60 }} alt="Student Portal" /> 
                <div className="sidebar mt-5">
          ghghg
        </div>
            </div>
       </div>


    );
}

export default sidebar;