import React from 'react';

const Hello = ({ render, name }) => {
  return <>{render(name)}</>;
};

export default Hello;
