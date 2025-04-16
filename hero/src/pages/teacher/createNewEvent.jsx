import React, { useState } from "react";
import axios from "axios";
import "./createNewEvent.css";


function CreatEvent() {
    const [eventData, setEventData] = useState({
        name: '',
        venue: '',
        time: ''
    });

    const handleChange = (e) => {
        setEventData({
            ...eventData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Dummy API URL (you can replace this with your real backend endpoint)
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", eventData);
            console.log("Event Created:", response.data);
            alert("Event submitted successfully!");
        } catch (error) {
            console.error("Error submitting event:", error);
            alert("Failed to submit event.");
        }
    };

    return(
        <div className=" p-3 mt-4">
            <h2> Create Event</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className="row mt-2">

                    <label>Event Name:</label>
               <div className="input-group flex-nowrap w-75 mt-1">
               
                <input
                    type="text"
                    className="form-control"
                    placeholder="Event Name "
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    style={{ width: "150px" }} // adjust the px as needed
                />
                </div>
                    </div>

                <div className="row mt-2">

                    <label>Event Description:</label>
                    <div className="input-group flex-nowrap w-75 mt-1">

                    <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    style={{ width: "150px" }} // adjust the px as needed
                    />
                </div>


                </div>

                <div className="row mt-2">

                    <label>Event Type / Category:</label>
                <div className="input-group flex-nowrap w-25 mt-1">

                <select
                    name="type"
                    value={eventData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Event Type</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="party">Party</option>
                </select>
                </div>

                <div className="input-group flex-nowrap w-25 mt-1 ms-2">

                <select
                    name="type"
                    value={eventData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Class</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="party">Party</option>
                </select>
                </div>

                </div>

                <div className="input-group flex-nowrap w-25 mt-3">
               
                <select
                    name="type"
                    value={eventData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Subjects</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="party">Party</option>
                </select>
                </div>

                <div className="row1 mt-3 ">
               
               <select
                   name="type"
                   value={eventData.type}
                   onChange={handleChange}
                   required
               >
                   <option value="">Members</option>
                   <option value="conference">Conference</option>
                   <option value="workshop">Workshop</option>
                   <option value="seminar">Seminar</option>
                   <option value="party">Party</option>
               </select>
               </div>

               <div>
               <button type="submit" className="btn mt-3 w-40" style={{ background: "#7E0AA1", color: "white"}}>
                Submit
                </button>
               </div>
               
               </div>

            </form>

        </div>

    );
}

export default CreatEvent;