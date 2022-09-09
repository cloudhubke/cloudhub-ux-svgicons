import React from 'react';
import fixedasset from './assets/fixed-asset.svg';

const FixedAssetsIcon = ({ size = 24, ...props }) => (
  <img
    alt=""
    src={fixedasset}
    style={{ height: size, width: size }}
    {...props}
  />
);

export default FixedAssetsIcon;
