import React, { useState } from "react";
import axios from "axios";
import "./parentEventClubs.css";
import Pdetails from "../../components/pdetails"

function Poverview() {
    return(
        <div className="container ms-2">
             <Pdetails />

        <div>
        <h5 className="mt-5 ms-4">Academic Overview</h5>
            <div className="d-flex gap-3 flex-wrap mt-4 ms-4"> {/* Flex row with spacing and wrapping */}
            <div className="card" style={{ width: "220px", border: "2px solid #ccc", padding: "1rem" }}>
                <div className="card-body">
                <label>Batch</label>
                <h5 className="card-title">GOLD</h5>
                <h6 className="card-subtitle mb-2 text-muted">Points</h6>
                <p className="card-text">1000</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="card" style={{ width: "220px", border: "2px solid #ccc", padding: "1rem" }}>
                <div className="card-body">
                <label>Batch</label>
                <h5 className="card-title">GOLD</h5>
                <h6 className="card-subtitle mb-2 text-muted">Points</h6>
                <p className="card-text">1000</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="card" style={{ width: "220px", border: "2px solid #ccc", padding: "1rem" }}>
                <div className="card-body">
                <label>Batch</label>
                <h5 className="card-title">GOLD</h5>
                <h6 className="card-subtitle mb-2 text-muted">Points</h6>
                <p className="card-text">1000</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
            </div>


        </div>
        <h5 className="mt-5 ms-4">Profie Overview</h5>
        <div className="d-flex gap-3 flex-wrap mt-4 ms-4"> {/* Flex row with spacing and wrapping */}
            <div className="card" style={{ width: "220px", border: "2px solid #ccc", padding: "1rem" }}>
                <div className="card-body">
                <label>Batch</label>
                <h5 className="card-title">GOLD</h5>
                <h6 className="card-subtitle mb-2 text-muted">Points</h6>
                <p className="card-text">1000</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="card" style={{ width: "220px", border: "2px solid #ccc", padding: "1rem" }}>
                <div className="card-body">
                <label>Batch</label>
                <h5 className="card-title">GOLD</h5>
                <h6 className="card-subtitle mb-2 text-muted">Points</h6>
                <p className="card-text">1000</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="card" style={{ width: "220px", border: "2px solid #ccc", padding: "1rem" }}>
                <div className="card-body">
                <label>Batch</label>
                <h5 className="card-title">GOLD</h5>
                <h6 className="card-subtitle mb-2 text-muted">Points</h6>
                <p className="card-text">1000</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
            </div>
</div>
        </div>
        </div>
    )
}

export default Poverview;