import React, { useState } from "react";
import axios from "axios";
import "./parentEventClubs.css";
import Pdetails from "../../components/pdetails"

function PeventClubs() {
  const [eventData, setEventData] = useState({
    name: "",
    venue: "",
    time: "",
    eventType: "",
  });

  const [rules, setRules] = useState([""]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRuleChange = (index, value) => {
    const newRules = [...rules];
    newRules[index] = value;
    setRules(newRules);
  };

  const addNewRule = () => {
    setRules([...rules, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", eventData, rules);
    // You can send this data to your server using axios if needed
    // Example:
    // axios.post('/api/events', { eventData, rules })
  };

  return (
    <div className="container">
       
      <Pdetails />
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 leftcontainer p-3 mt-4 h-100">
          <div className="d-flex align-items-center justify-content-between w-100">
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <div className="input-group mb-3" style={{ width: "100%" }}>
                <input type="file" className="form-control" id="inputGroupFile02" />
              </div>

              <label className="label">Add Event Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Club Name"
                aria-label="Club Name"
                name="name"
                value={eventData.name}
                onChange={handleChange}
              />

              <label className="label mt-4">Add Event Details</label>
              <textarea
                className="form-control"
                aria-label="Venue"
                name="venue"
                value={eventData.venue}
                onChange={handleChange}
              ></textarea>

              <label className="label mt-4">Add Event Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add Event Type"
                aria-label="etpy"
                name="time"
                value={eventData.time}
                onChange={handleChange}
              />

              <label className="label mt-4">Add Club Rules</label>

              {rules.map((rule, index) => (
                <div key={index} className="mb-2">
                  <span>Rule {index + 1}</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter rule"
                    value={rule}
                    onChange={(e) => handleRuleChange(index, e.target.value)}
                  />
                </div>
              ))}

              <button type="button" className="btn btn-light mt-2" onClick={addNewRule}>
                Add New Rule
              </button>

              <label className="label mt-4">Invite Members Section</label>

              <div className="p-3 bg-light rounded">
                <h6 className="fw-bold text-primary">Invite Members</h6>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <div>
                  <p className="fw-bold">Suggested</p>
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="profile"
                          className="rounded-circle me-2"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span><strong>Diduli</strong></span>
                      </div>
                      <button type="button" className="btn btn-primary">Invite</button>
                    </div>
                  ))}
                </div>
                <div className="text-center"></div>
                <button type="submit" className="btn btn-purple mt-3" style={{ backgroundColor: '#8000b3', color: '#fff' }}>
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
          <div className="input-group input-group-sm mb-3"></div>
          <label className="filterName">Filter</label>
          <div className="mt-3 ms-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div className="form-check" key={i}>
                <input className="form-check-input" type="checkbox" value="" id={`flexCheck${i}`} />
                <label className="form-check-label" htmlFor={`flexCheck${i}`}>
                  Checkbox
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeventClubs;
