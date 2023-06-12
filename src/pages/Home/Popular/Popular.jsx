import React, { useEffect, useState } from "react";
import ClassItem from "./ClassItem";

const Popular = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category === 'popular')
        // console.log(popularItems);
        setPopularClass(popularItems);
      });
  }, []);

   return (
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       {popularClass.map((item) => (
         <ClassItem key={item._id} item={item}></ClassItem>
       ))}
     </div>
   );
};

export default Popular;
