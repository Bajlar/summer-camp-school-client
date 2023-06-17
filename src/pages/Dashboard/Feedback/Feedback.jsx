import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Feedback = () => {
  const { state } = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axiosSecure.patch(`/classes/admin/feedback/${state}`, {
      feedback: data.feedback,
    });
    console.log( data);
    console.log(res.data);
    if (res.data?.modifiedCount) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Feedback Done Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  return (
    <div className="min-h-screen p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:w-full">
          <textarea
            className="pt-5 text-gray"
            {...register("feedback", { required: true })}
            name="feedback"
            id=""
            placeholder="Text your Feedback"
            cols="80"
            rows="5"
          ></textarea>
          <br />
          {errors.feedback && (
            <span className="text-red-600">Feedback is required</span>
          )}
        </div>
        <div className=" mt-4">
          <input className="btn btn-sm capitalize" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Feedback;