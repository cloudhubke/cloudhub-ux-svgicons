import React from 'react';
import supplier from './assets/supplier.svg';

const SupplierIcon = ({ size = 24, ...props }) => (
  <img alt="" src={supplier} style={{ height: size, width: size }} {...props} />
);

export default SupplierIcon;
