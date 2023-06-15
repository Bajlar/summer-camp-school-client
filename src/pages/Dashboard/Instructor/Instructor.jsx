import React from 'react';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {
  const handleAdded = event => {
    event.preventDefault();

    const form = event.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const seats = form.seats.value;
    const price = form.price.value;
    console.log(className, classImage, instructorName, instructorEmail, seats, price);
  }

  return (
     <div className='w-full'> 
      <Helmet>
        <title>Cricket academy | Instructor</title>
      </Helmet>
      <section>
        <form onSubmit={handleAdded} className="bg-[#F3F3F3] p-20">
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Class Name*</span>
              </label>
              <input
                type="text"
                name='className'
                placeholder="Enter your class Name"
                className="input w-full"
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Class Image*</span>
              </label>
              <input
                type="text"
                name='classImage'
                placeholder="Enter your class Image"
                className="input w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Instructor Name*</span>
              </label>
              <input
                type="text"
                name='instructorName'
                placeholder="Enter Instructor Name"
                className="input w-full"
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Instructor Email*</span>
              </label>
              <input
                type="text"
                name='instructorEmail'
                placeholder="Enter Instructor Email"
                className="input w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Available seats*</span>
              </label>
              <input
                type="text"
                name='seats'
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
                name='price'
                placeholder="Enter Price"
                className="input w-full"
              />
            </div>
          </div>
          <div className="text-center">
            <input className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white capitalize border-0 mt-4" type="submit" value="Add button" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Instructor;