import React, { useState, useEffect } from "react";
import testspimage from "../../assests/images/testI2sp.jpg"; // fallback image

function Sevent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const dummyData = [
          {
            _id: "1",
            title: "Sports Meet",
            description: "Group num1 aadldld dldlgl ldlrlfdld dlrlrle flgtlgtlt lgogkgeo fek fbpmpm dfbkmdpbg",
            imageUrl: testspimage,
          },
          {
            _id: "2",
            title: "Art Exhibition",
            description: "Amazing art created by students from Grade 1 to 5 showcased.",
            imageUrl: testspimage,
          },
        ];

        setTimeout(() => {
          setEvents(dummyData);
        }, 500);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Handle interest button click
  const handleInterestClick = (eventTitle) => {
    const confirmInterest = window.confirm(`Do you want to express interest in "${eventTitle}"?`);
    if (confirmInterest) {
      // Proceed with expressing interest (e.g., send a request to backend)
      alert(`Thank you for showing interest in "${eventTitle}"!`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 leftcontainer p-3 mt-4">
          {events.map((event) => (
            <div className="card mb-3" key={event._id}>
              <div className="card-body position-relative">
                <button
                  type="button"
                  className="btn position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#FF0000",
                    borderColor: "#FF0000",
                    color: "white",
                    padding: "3px 7px",
                    fontSize: "0.85rem",
                    height: "32px",
                  }}
                  onClick={() => handleInterestClick(event.title)}
                >
                  Interest
                </button>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src={event.imageUrl || testspimage}
                    className="img-fluid custom-pimg ms-2"
                    alt={event.title}
                    style={{ cursor: "pointer", width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <div className="d-flex flex-column ms-3">
                    <label className="mb-1">{event.title}</label>
                    <p className="mb-0">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
          <h5>Upcoming Events</h5>
          <ul>
            {events.map((event) => (
              <li key={event._id}>{event.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sevent;
