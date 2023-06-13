import React, { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);;
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-14 pt-12">
      <Helmet>
        <title>Cricket academy | Instructors</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;