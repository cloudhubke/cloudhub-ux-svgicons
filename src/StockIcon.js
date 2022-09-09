import React from 'react';
import packages from './assets/packages.svg';

const StockIcon = ({ size = 24, ...props }) => (
  <img alt="" src={packages} style={{ height: size, width: size }} {...props} />
);

export default StockIcon;
