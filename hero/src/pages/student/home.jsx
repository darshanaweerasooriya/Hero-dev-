import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./home.css";
import myimage from "../../assests/images/welcome.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import FilterIcon from "@mui/icons-material/Filter1";
import profile from "../../assests/images/profile.jpg";
import testimage from "../../assests/images/classroomtest.jpg";

function Home() {

  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState(""); // Holds HTML content
  const [selectedImages, setSelectedImages] = useState([]);

  const handleContentChange = (e) => {
    setPostContent(e.currentTarget.innerHTML);
  };

  // Handle image selection and insert into contentEditable div
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setSelectedImages([...selectedImages, ...imageUrls]);

    // Append images inside the contentEditable div
    const editor = document.getElementById("postEditor");
    imageUrls.forEach((url) => {
      const imgTag = `<img src="${url}" class="img-thumbnail me-2" style="width: 70px; height: 70px;" />`;
      editor.innerHTML += imgTag;
    });

    setPostContent(editor.innerHTML);
  };

  // Handle Post Submission
  const handlePost = () => {
    if (postContent.trim()) {
      const newPost = {
        username: "Diduli",
        date: new Date().toDateString(),
        content: postContent,
      };
      setPosts([newPost, ...posts]); // Add new post to the top
      setPostContent("");
      setSelectedImages([]);
      document.getElementById("postEditor").innerHTML = ""; // Clear editor
    }
  };


  return (
    <div className="container">
      <div className="row ">
        {/* Left Section (Wider - 8 columns) */}
        <div className="col-md-8 leftcontainer p-3 mt-4">
          <h1 className="home">Home</h1>
          <div className="stories-container d-flex">
            <div className="card ms-0 pt-2" style={{ width: "7rem", height: "9rem" }}>
              <img src={myimage} className="card-img-top" alt="..." />
              <div className="card-body"></div>
            </div>
            <div className="card ms-2 pt-2" style={{ width: "7rem", height: "9rem" }}>
              <img src={myimage} className="card-img-top" alt="..." />
              <div className="card-body"></div>
            </div>
            <div className="card ms-2 pt-2" style={{ width: "7rem", height: "9rem" }}>
              <img src={myimage} className="card-img-top" alt="..." />
              <div className="card-body"></div>
            </div>
          </div>
          <div className="post mt-4">
            <div className="mb-3 ms-3">
            <label htmlFor="postEditor" className="form-label">
                Share something...
              </label>
              {/* Editable Div to Enter Text and Display Images */}
              <div
                id="postEditor"
                className="form-control"
                contentEditable="true"
                onInput={handleContentChange}
                style={{ minHeight: "100px", border: "1px solid #ccc", padding: "8px", width: "95%" }}
              ></div>
              
              <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
              <label htmlFor="imageUpload" className="btn btn-outline-secondary btn-sm">
                  <AddAPhotoIcon />
              
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

              {/* <div className="d-flex mt-2">
                {selectedImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="preview"
                    className="img-thumbnail me-2"
                    style={{ width: "70px", height: "70px" }}
                  />
                ))}
              </div> */}
                <button
                  type="button"
                  className="btn btn-sm me-4"
                  style={{ backgroundColor: "#7E0AA1", color: "white" }}
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-between align-items-center mt-1 mb-2">
            <p style={{ color: "#787878" }}>All</p>
            <FilterIcon />
          </div>
          <hr></hr>
          {posts.map((post, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src={profile} className="profilep me-2" alt="profile" />
                  <div>
                    <p className="pname mb-0">{post.username}</p>
                    <small className="text-muted">{post.date}</small>
                  </div>
                </div>
                {/* Display post content properly */}
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: post.content }}></p>
              </div>
            </div>

          ))}
         

          
        </div>

        {/* Right Section (Smaller - 4 columns) */}
        <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
        <div class="input-group input-group-sm mb-3 ">
      
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Search..."/>
      </div>
      <div className="mt-2 d-flex justify-content-between align-items-center mt-1 mb-2">
          <label>Suggestions</label>
          <label>See all</label>
        </div>
        <div>
        <img src={testimage} className="card-img-top" alt="..." />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
