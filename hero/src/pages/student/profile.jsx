import React, { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./profile.css";
import testimage from "../../assests/images/classroomtest.jpg";
import pp from "../../assests/images/profilepic.jpg"
import Performance from "./perfomance"



function Profile() {

  const [coverPhoto, setCoverPhoto] = useState(testimage);
  const [profilePic, setProfilePic] = useState(pp);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewIamage] = useState(null);
  const [activeTab, setActiveTab] = useState("performance");


  //file selection
  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverPhoto(imageUrl);
     }
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file){
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  //preview
  const togglePreview = (image) => {
    setPreviewIamage(image)
    setIsPreviewOpen(true);
  }

  
  return (
    <div>
    <div className="profile-container">
      {/* Cover Photo Section */}
      <div className="cover-photo-container">
        <img
          src={coverPhoto}
          className="img-fluid custom-img"
          alt="Cover"
          onClick={() => togglePreview(coverPhoto)}
        />
      </div>
    </div>

    {/* Profile Picture Section */}
    <div className="d-flex align-items-center mt-2">
      <div>
        <img
          src={profilePic}
          className="img-fluid custom-pimg ms-2"
          alt="Profile"
          onClick={() => togglePreview(profilePic)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="ms-4">
        <label className="pname d-block">Sophia Williams</label>
        <label className="grade d-block">Grade 12 - Science Stream</label>
      </div>
    </div>

    {/* Flex container to position the card on the left */}
    <div className="d-flex mt-3">
      
     

      {/* Tabs on the Right */}
      <div className="flex-grow-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "performance" ? "active" : ""}`}
              onClick={() => setActiveTab("performance")}
            >
              Overview
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "attendance" && <performance/> }`}
              onClick={() => setActiveTab("attendance")}
            >
              Performance
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "assignments" ? "active" : ""}`}
              onClick={() => setActiveTab("assignments")}
            >
              Activity
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link " aria-disabled="true">
              Contact
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-3">
          {activeTab === "performance" && (
            <div>
              <perfomance/>
            </div>
          )}
          {activeTab === "attendance" && (
            <div>
              <h3>Attendance Record</h3>
              <p>Attendance details will be displayed here.</p>
            </div>
          )}
          {activeTab === "assignments" && (
            <div>
              <h3>Assignments</h3>
              <p>Submitted and pending assignments will be listed here.</p>
            </div>
          )}
        </div>
      </div>
       {/* Card on the Left */}
       <div className="card me-4 ms-3" style={{ width: "15rem", height: "20rem"}}>
       
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    {/* Preview Modal */}
    {isPreviewOpen && (
      <div className="preview-modal" onClick={() => setIsPreviewOpen(false)}>
        <div className="preview-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={() => setIsPreviewOpen(false)}>
            &times;
          </span>
          <img src={previewImage} alt="Preview" className="preview-img" />
        </div>
      </div>
    )}
  </div>
  );
}


export default Profile;
