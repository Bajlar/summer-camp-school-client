import React from 'react';
import Instructor from './Instructor';
import useInstructors from '../../../hooks/useInstructors';

const PopularInstructors = () => {
  const [instructors] = useInstructors();
  // console.log(instructors);
  const popular = instructors.filter((item) => item.category === "popular");
  // console.log(popular);
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popular.map((item) => (
        <Instructor key={item._id} item={item}></Instructor>
      ))}
    </div>
  );
};

export default PopularInstructors;