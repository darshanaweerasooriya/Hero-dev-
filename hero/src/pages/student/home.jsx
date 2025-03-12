import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./home.css";
import myimage from "../../assests/images/welcome.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import FilterIcon from "@mui/icons-material/Filter1";
import profile from "../../assests/images/profile.jpg";

function Home() {
  return (
    <div className="container">
      <div className="row">
        {/* Left Section (Wider - 8 columns) */}
        <div className="col-md-8 leftcontainer p-3">
          <h1 className="home">Home</h1>
          <div className="stories-container d-flex">
            <div className="card ms-2 pt-2" style={{ width: "7rem", height: "9rem" }}>
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
          <div className="post mt-2">
            <div className="mb-3 ms-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              
              <div className="d-flex justify-content-between align-items-center mt-1 mb-2">
                <span className="material-symbols-outlined">
                  <AddAPhotoIcon />
                </span>

                <button type="button" className="btn  btn-sm me-4" style={{backgroundColor: "#7E0AA1", color: "white"}}>
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-between align-items-center mt-1 mb-2">
            <p style={{color: "#787878"}}>All</p>
            <FilterIcon/>
          </div>
          <hr></hr>
          <div>
          <div className=" d-flex  justify-content-between align-items-center">
          <div class="card" style={{width: "18rem;"}}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
          
        </div>

        {/* <img src={profile} className="profilep" alt="..." />
          <p className="pname ms-3">Diduli</p>
          <p>March 19</p> */}

          </div>
        </div>

        {/* Right Section (Smaller - 4 columns) */}
        <div className="col-md-4 rightcontainer p-3 bg-light">
          gg
        </div>
      </div>
    </div>
  );
}

export default Home;
