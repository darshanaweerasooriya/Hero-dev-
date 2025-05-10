import React, { useState } from "react";
import axios from "axios";

function AddingStudent() {
     const [formData, setFormData] = useState({
            fullName: "",
           
            className: "",
            gender: "",
            password: "",
            phoneNumber: "",
            subject: ""
        });
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await axios.post("#", formData);
                alert("Teacher added successfully!");
                console.log(res.data);
            } catch (err) {
                console.error(err);
                alert("Failed to add teacher");
            }
        };

        // Student add here
        return(
            <div>
            <form onSubmit={handleSubmit}>
                <div className="row_header mt-3">
                    <h3>Add Stdudent details here</h3>

                    
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label>FullName</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-3">
                            <label>Class</label>
                            <select
                                name="className"
                                className="form-select"
                                value={formData.className}
                                onChange={handleChange}
                            >
                                <option>Select Class</option>
                                <option>6-A</option>
                                <option>7-A</option>
                                <option>8-A</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label>Gender</label>
                            <select
                                name="gender"
                                className="form-select"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3 mt-5">
                        <center>
                            <button
                                type="submit"
                                className="mb-3 btn btn-primary btn-sm mt-4"
                                style={{
                                    backgroundColor: "#2D88D4",
                                    borderColor: "#2D88D4",
                                    color: "white",
                                    width: 100
                                }}
                            >
                                Add
                            </button>
                        </center>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AddingStudent;