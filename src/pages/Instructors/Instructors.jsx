import React, { useEffect, useState } from 'react';

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          instructors.length
        }
        {/* {classes.map((classes) => (
          <SingleClass key={classes._id} classes={classes}></SingleClass>
        ))} */}
      </div>
    </div>
  );
};

export default Instructors;