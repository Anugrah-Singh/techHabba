import React from 'react';

export const Cover = ({ children, className }) => {
  return (
    <span className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 ${className || ''}`}>
      {children}
    </span>
  );
};

export default Cover;
