import React from 'react';
import useTheme from '../hooks/useTheme';

const SectionTitle = ({ heading }) => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <h3 className={`text-3xl text-center font-bold ${isDarkMode ? 'text-white' : ''}`}>{heading}</h3>
      <div className="divider w-3/4 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;