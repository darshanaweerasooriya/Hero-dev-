import React, { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

import pp from "../assests/images/profilepic.jpg"


function Pdetails() {
    const [profilePic, setProfilePic] = useState(pp);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewImage, setPreviewIamage] = useState(null);
    // const [activeTab, setActiveTab] = useState("performance");

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

      return(
        <div>
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
      
    </div>
    <div className="ms-4">
        <label className="pname d-block">Sophia Williams</label>
        <label className="grade d-block">Grade 12 - Science Stream</label>
      </div>
        </div>
      )
}

export default Pdetails;
