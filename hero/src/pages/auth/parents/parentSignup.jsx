import React, { useState } from "react";
import './parentlogin.css';
import myimage from '../../../assests/images/welcome.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Psignup() {
    // Sample children list (replace with real data/API)
    const childrenList = [
        { id: 1, name: "Amal Perera" },
        { id: 2, name: "Nimali Silva" },
        { id: 3, name: "Kasun Fernando" }
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredChildren, setFilteredChildren] = useState([]);
    const [selectedChild, setSelectedChild] = useState(null);

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        const filtered = childrenList.filter((child) =>
            child.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredChildren(filtered);
    };

    const handleChildSelect = (child) => {
        setSelectedChild(child);
        setSearchQuery(child.name);
        setFilteredChildren([]);
    };

    return (
        <div className="row" style={{ display: "flex", height: "100vh" }}>
            <div className="container leftSide d-flex flex-column w-100 md-5" style={{ flex: 1 }}>
                <h1 className="mt-2 ms-4">Signup to HERO</h1>

                <div className="d-flex flex-column ms-4">
                    <div className="mt-5"><p>Just some details to get you in.!</p></div>
                </div>

                <div className="">
                    <form className="sdetails ms-4">
                        <div className="mb-2">
                            <input
                                type="text"
                                id="userName"
                                placeholder="User name"
                                className="bg-transparent border-b border-gray-500 py-0.5 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75 rounded"
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="bg-transparent border-b border-gray-500 mt-1 py-0.5 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75 rounded"
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="bg-transparent border-b border-gray-500 mt-1 py-0.5 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75 rounded"
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                id="confirmPassword"
                                placeholder="Re-enter Password"
                                className="bg-transparent border-b border-gray-500 mt-1 py-0.5 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75 rounded"
                            />
                        </div>

                        {/* Child Search Section */}
                        <div className="mb-2 position-relative">
                            <input
                                type="text"
                                placeholder="Search child by name"
                                className="bg-transparent border-b border-gray-500 mt-1 py-0.5 px-1 text-white text-lg focus:outline-none focus:border-purple-400 w-75 rounded"
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                            {filteredChildren.length > 0 && (
                                <ul className="list-group position-absolute mt-1" style={{ width: "75%", zIndex: 10 }}>
                                    {filteredChildren.map((child) => (
                                        <li
                                            key={child.id}
                                            className="list-group-item list-group-item-action"
                                            onClick={() => handleChildSelect(child)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {child.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {selectedChild && (
                            <div className="text-white mb-2 ms-1">
                                Selected child: <strong>{selectedChild.name}</strong>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-sm w-75 mt-3 shadow-sm"
                            style={{ backgroundColor: "#D27EEF", borderColor: "#D27EEF", color: "white", width: 100 }}
                        >
                            Submit
                        </button>
                    </form>
                    <hr className="ms-4 w-75" />
                </div>

                <div className="d-flex justify-content-start ms-4 mt-4">
                    <button className="btn btn-light d-flex align-items-center px-3 py-2 rounded w-40 shadow-sm"
                        style={{ fontSize: "14px" }}>
                        <img
                            src="https://w7.pngwing.com/pngs/506/509/png-transparent-google-company-text-logo.png"
                            alt="Google Logo"
                            style={{ width: "20px", height: "20px", marginRight: "10px" }}
                        />
                        Sign in with Google
                    </button>
                </div>

                <div className="mb-2 mt-3 ms-4">
                    Already Registered? <Link to="/loginParent"> Sign in</Link>
                </div>
            </div>

            <div className="container rightSide d-flex flex-column" style={{ flex: 1, height: "100vh" }}>
                <h1 style={{ color: "white", fontSize: "10vh", fontWeight: "bold" }} className="mt-2">
                    Welcome to
                </h1>
                <h2 style={{ color: "white", fontSize: "7vh" }} className="mt-6">
                    Hero
                </h2>
                <p style={{ color: "white" }}>Log in to access your account</p>
                <img src={myimage} className="pt-5" style={{ width: 450 }} alt="Student Portal" />
            </div>
        </div>
    );
}

export default Psignup;
