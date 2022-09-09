import React from 'react';
import legal from './assets/legal.svg';

const LegalIcon = ({ size = 24, ...props }) => (
  <img alt="" src={legal} style={{ height: size, width: size }} {...props} />
);

export default LegalIcon;
