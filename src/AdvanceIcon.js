import React from 'react';
import advance from './assets/advance.svg';

const AdvanceIcon = ({ size = 24, ...props }) => (
  <img alt="" src={advance} style={{ height: size, width: size }} {...props} />
);

export default AdvanceIcon;
