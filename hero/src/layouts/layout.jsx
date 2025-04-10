import React  from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

function Layout() {
    return(
        <div>
            {/* Sidebar stays fixed */}
            <Sidebar />
            
            {/* Main content changes based on routes */}
            <div style={{
                flexGrow: 1,
                padding: "20px",
                backgroundColor: "#f4f4f4",
                height: "100vh",
                marginLeft: "300px",
                boxSizing: "border-box",
                overflowY: "auto" 
            }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;