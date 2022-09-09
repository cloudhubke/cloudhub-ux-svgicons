import React from 'react';
import checkout from './assets/checkout.svg';

const PurchaseOrderIcon = ({ size = 24, ...props }) => (
  <img alt="" src={checkout} style={{ height: size, width: size }} {...props} />
);

export default PurchaseOrderIcon;
