import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import testimage from "../../assests/images/classroomtest.jpg";

function Sgroup() {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const dummyData = [
          {
            _id: "g1",
            name: "Group 01",
            description: "Group 1 for Science Project: Exploring Space and Planets.",
            imageUrl: testimage,
          },
          {
            _id: "g2",
            name: "Group 02",
            description: "Math Wizards Group: Preparing for inter-school math competition.",
            imageUrl: testimage,
          },
        ];

        setTimeout(() => {
          setGroups(dummyData);
        }, 500);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);

  const handleJoinClick = (e, groupName) => {
    e.stopPropagation();
    const confirmJoin = window.confirm(`Do you want to join "${groupName}"?`);
    if (confirmJoin) {
      alert(`You have joined "${groupName}" successfully!`);
    }
  };

  const handleCardClick = (group) => {
    navigate(`/stduentGDetails/${group._id}`, { state: { group } });
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 leftcontainer p-3 mt-4">
          {groups.map((group) => (
            <div
              className="card mb-3"
              key={group._id}
              onClick={() => handleCardClick(group)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body position-relative">
                <button
                  type="button"
                  className="btn position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#9C6FE4",
                    borderColor: "#9C6FE4",
                    color: "white",
                    padding: "3px 7px",
                    fontSize: "0.85rem",
                    height: "32px",
                  }}
                  onClick={(e) => handleJoinClick(e, group.name)}
                >
                  Join
                </button>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src={group.imageUrl || testimage}
                    className="img-fluid custom-pimg ms-2"
                    alt={group.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  />
                  <div className="d-flex flex-column ms-3">
                    <label className="mb-1">{group.name}</label>
                    <p className="mb-0">{group.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
          <h5>Available Groups</h5>
          <ul>
            {groups.map((group) => (
              <li key={group._id}>{group.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sgroup;
