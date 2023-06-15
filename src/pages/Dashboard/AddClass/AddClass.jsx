import React from 'react';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const AddClass = () => {
  const { user } = useAuth();

  const handleAddClass = event => {
    event.preventDefault();

    const form = event.target;
    const className = form.className.value;
    const image = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const status = form.status.value;
    const newAddClass = {
      className,
      image,
      instructorName,
      instructorEmail,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
      status,
    };
    // console.log(newAddClass);

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Class Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Cricket academy | Instructor</title>
      </Helmet>
      <section>
        <form onSubmit={handleAddClass} className="bg-[#F3F3F3] p-20">
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Class Name*
                </span>
              </label>
              <input
                type="text"
                name="className"
                required
                placeholder="Enter your class Name"
                className="input w-full"
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Class Image*
                </span>
              </label>
              <input
                type="url"
                name="classImage"
                required
                placeholder="Enter your class Image"
                className="input w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Instructor Name*
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                name="instructorName"
                placeholder="Enter Instructor Name"
                className="input w-full"
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Instructor Email*
                </span>
              </label>
              <input
                type="text"
                name="instructorEmail"
                defaultValue={user?.email}
                readOnly
                placeholder="Enter Instructor Email"
                className="input w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Available seats*
                </span>
              </label>
              <input
                type="text"
                name="availableSeats"
                required
                placeholder="Enter Available seats"
                className="input w-full"
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Price*</span>
              </label>
              <input
                type="text"
                name="price"
                required
                placeholder="Enter Price"
                className="input w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4 mb-2">
            <div className="">
              <input
                type="text"
                name="status"
                defaultValue={"Pending"}
                hidden
                className="input w-full"
              />
            </div>
          </div>
          <div className="text-center">
            <input
              className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white capitalize border-0 mt-4"
              type="submit"
              value="Add button"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddClass;