import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


function AddStudent() {
    const navigate = useNavigate();

    const handleAddTeacher = () => {
        navigate("/addingStudnet"); // Make sure this route exists in your Router
    };
    return (
        <div>
             <div className=" flex justify-end  mb-6">
                <button
                    className="btn btn-primary btn-sm"
                    style={{
                        backgroundColor: "#2D88D4",
                        borderColor: "#2D88D4",
                        color: "white",
                        width: 150
                    }}
                    onClick={handleAddTeacher}
                >
                    Add Students
                </button>
            </div>
            <div className="mb-2">
                            <input
                                type="text"
                                id="search"
                                placeholder="search"
                                className=" mt-4 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-base text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300 w-75"
                            />
                        </div>
          <div className="teachersList mt-4">
          <table class="table">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Student ID</th>
      <th scope="col">Email</th>
      <th scope="col">Class</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>234354</td>
      <td>mark@gmail.com</td>
      <td>13-A</td>
      <td>Male</td>
    </tr>
   
  </tbody>
</table>
          </div>
        </div>
    )
}
export default AddStudent;