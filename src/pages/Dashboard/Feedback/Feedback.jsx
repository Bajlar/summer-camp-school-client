import React from 'react';

const Feedback = () => {
  return (
    <div className="w-full min-h-screen p-4">
      <form>
        <div className="md:w-full">
          <textarea
            className="pt-5 text-gray"
            name=""
            id=""
            placeholder="Text your Feedback"
            cols="80"
            rows="5"
          ></textarea>
        </div>
        <div className=" mt-4">
          <input className="btn btn-sm capitalize" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Feedback;