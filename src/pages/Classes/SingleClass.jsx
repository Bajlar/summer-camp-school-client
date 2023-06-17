import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleClass = ({ classes }) => {
  // console.log(classes);
  const { className, image, instructorName, price, availableSeats } = classes;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelected = (classes) => {
    // console.log(classes);
    if (user) {
      fetch("http://localhost:5000/selected")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "class selected added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to class selected",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="h-64 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Class Name: {className}</h2>
        <p>Instructor Name: {instructorName}</p>
        <p>Price: {price}</p>
        <p>Available Seats: {availableSeats}</p>
        <div className="card-actions">
          <button
            onClick={() => handleSelected(classes)}
            className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;