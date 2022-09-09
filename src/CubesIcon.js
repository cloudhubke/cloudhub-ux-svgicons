import React from 'react';
import cubes from './assets/cubes.svg';

const CubesIcon = ({ size = 24, ...props }) => (
  <img alt="" src={cubes} style={{ height: size, width: size }} {...props} />
);

export default CubesIcon;
