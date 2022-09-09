import React from 'react';
import letterv from './assets/letter-v.svg';

const LetterVIcon = ({ size = 24, ...props }) => (
  <img alt="" src={letterv} style={{ height: size, width: size }} {...props} />
);

export default LetterVIcon;
