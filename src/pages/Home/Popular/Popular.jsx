import React from "react";
import ClassItem from "./ClassItem";
import useClasses from "../../../hooks/UseClasses";

const Popular = () => {
  const [classes] = useClasses();
  // console.log(classes);
  const popular = classes.filter((item) => item.category === "popular");
  // console.log(popular);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popular.map((item) => (
        <ClassItem key={item._id} item={item}></ClassItem>
      ))}
    </div>
  );
};

export default Popular;
