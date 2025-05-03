import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import myimage from "../../assests/images/welcome.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import FilterIcon from "@mui/icons-material/Filter1";
import profile from "../../assests/images/profile.jpg";
import testimage from "../../assests/images/classroomtest.jpg";

function Home() {
  const [posts, setPosts] = useState([
    {
      username: "John Doe",
      date: "May 1, 2025",
      content: "Excited to start the new course! 📘",
      image: testimage,
      showCommentBox: false,
      showShareBox: false,
      comments: [],
    },
  ]);

  const [postContent, setPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [newComment, setNewComment] = useState({});

  const handleContentChange = (e) => {
    setPostContent(e.currentTarget.innerHTML);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setSelectedImages([...selectedImages, ...imageUrls]);

    const editor = document.getElementById("postEditor");
    imageUrls.forEach((url) => {
      const imgTag = `<img src="${url}" class="img-thumbnail me-2" style="width: 70px; height: 70px;" />`;
      editor.innerHTML += imgTag;
    });

    setPostContent(editor.innerHTML);
  };

  const handlePost = () => {
    if (postContent.trim()) {
      const newPost = {
        username: "Diduli",
        date: new Date().toDateString(),
        content: postContent,
        image: selectedImages[0] || null,
        showCommentBox: false,
        showShareBox: false,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
      setSelectedImages([]);
      document.getElementById("postEditor").innerHTML = "";
    }
  };

  const toggleCommentBox = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].showCommentBox = !updatedPosts[index].showCommentBox;
    setPosts(updatedPosts);
  };

  const toggleShareBox = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].showShareBox = !updatedPosts[index].showShareBox;
    setPosts(updatedPosts);
  };

  const handleCommentChange = (index, value) => {
    setNewComment({ ...newComment, [index]: value });
  };

  const handleCommentSubmit = (index) => {
    if (!newComment[index]) return;

    const updatedPosts = [...posts];
    updatedPosts[index].comments.push({
      user: "You",
      text: newComment[index],
    });
    setPosts(updatedPosts);
    setNewComment({ ...newComment, [index]: "" });
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 leftcontainer p-3 mt-4">
          <h1 className="home">Home</h1>

          {/* Stories */}
          <div className="stories-container d-flex">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="card ms-2 pt-2"
                style={{ width: "7rem", height: "9rem" }}
              >
                <img src={myimage} className="card-img-top" alt="..." />
              </div>
            ))}
          </div>

          {/* Post Editor */}
          <div className="post mt-4">
            <div className="mb-3 ms-3">
              <label htmlFor="postEditor" className="form-label">
                Share something...
              </label>
              <div
                id="postEditor"
                className="form-control"
                contentEditable="true"
                onInput={handleContentChange}
                style={{
                  minHeight: "100px",
                  border: "1px solid #ccc",
                  padding: "8px",
                  width: "95%",
                }}
              ></div>

              <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                <label
                  htmlFor="imageUpload"
                  className="btn btn-outline-secondary btn-sm"
                >
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

          {/* Filter */}
          <div className="mt-2 d-flex justify-content-between align-items-center mb-2">
            <p style={{ color: "#787878" }}>All</p>
            <FilterIcon />
          </div>
          <hr />

          {/* Posts */}
          {posts.map((post, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src={profile}
                    className="profilep me-2"
                    alt="profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p className="pname mb-0">{post.username}</p>
                    <small className="text-muted">{post.date}</small>
                  </div>
                </div>

                <div className="mt-2" dangerouslySetInnerHTML={{ __html: post.content }} />
                {post.image && (
                  <img
                    src={post.image}
                    alt="post"
                    className="img-fluid rounded mt-2"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                )}

                <hr />
                <div className="d-flex justify-content-around text-muted">
                  <button className="btn btn-light btn-sm w-100 me-1">
                    👍 Like
                  </button>
                  <button
                    className="btn btn-light btn-sm w-100 me-1"
                    onClick={() => toggleCommentBox(index)}
                  >
                    💬 Comment
                  </button>
                  <button
                    className="btn btn-light btn-sm w-100"
                    onClick={() => toggleShareBox(index)}
                  >
                    ↗️ Share
                  </button>
                </div>

                {/* Comment Box */}
                {post.showCommentBox && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="form-control form-control-sm mb-2"
                      value={newComment[index] || ""}
                      onChange={(e) => handleCommentChange(index, e.target.value)}
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleCommentSubmit(index)}
                    >
                      Post Comment
                    </button>
                    <ul className="list-unstyled mt-2">
                      {post.comments.map((c, i) => (
                        <li key={i}>
                          <strong>{c.user}: </strong> {c.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Share Box */}
                {post.showShareBox && (
                  <div className="mt-3 border p-2 bg-light rounded">
                    <p className="mb-1 fw-bold">Share this post</p>
                    <input
                      type="text"
                      className="form-control form-control-sm mb-2"
                      placeholder="Say something about this..."
                    />
                    <button className="btn btn-success btn-sm">Share Now</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="col-md-4 rightcontainer p-3 bg-light mt-4">
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search input"
            />
          </div>

          <div className="mt-2 d-flex justify-content-between align-items-center mb-2">
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
