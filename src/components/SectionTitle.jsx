import React from 'react';

const SectionTitle = ({heading}) => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">{heading}</h3>
      <div className="divider w-3/4 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;