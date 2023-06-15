import React from 'react';
import SingleClass from './SingleClass';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
  const [classes] = useClasses();
  // console.log(classes);

  return (
    <div className="max-w-6xl mx-auto my-14 pt-12">
      <Helmet>
        <title>Cricket academy | Classes</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classes) => (
          <SingleClass key={classes._id} classes={classes}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;