import React from 'react';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {
  return (
     <div className='w-full'> 
      <Helmet>
        <title>Cricket academy | Instructor</title>
      </Helmet>
      <section>
        <form className="bg-[#F3F3F3] p-20">
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Class Name*</span>
              </label>
              <input
                type="text"
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
                placeholder="Enter Price"
                className="input w-full"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] capitalize border-0 mt-4">
              Add button
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Instructor;