import React from "react";
import "./sidebar.css";
import heroLogo from "../../src/assests/images/hero.png";
import { SidebarData } from "./sidebarData";
import { useNavigate } from "react-router-dom";



function Sidebar() {
    
    const navigate = useNavigate();
    return (
        <div>
            <div
                style={{
                    backgroundColor: "#9C6FE4",
                    height: "7vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                className="py-0 a"
            >
                <img src={heroLogo} style={{ width: 60 }} alt="Student Portal" />
            </div>
            
            <div className="sidebar mt-5">
                <ul className="sidebarList">
                    {SidebarData.map((val, key) => ( // Use parentheses instead of curly braces
                        <li className="row" key={key} onClick={() => navigate(val.link)}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar; // Corrected component name
