import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
      fetch("instructors.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const instructors = data.filter(
            (item) => item.category === "popular"
          );
          // console.log(Instructors);
          setPopularInstructors(instructors);
        });
    }, []);
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularInstructors.map((item) => (
        <Instructor key={item._id} item={item}></Instructor>
      ))}
    </div>
  );
};

export default PopularInstructors;