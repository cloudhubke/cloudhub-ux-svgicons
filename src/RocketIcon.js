import React from 'react';
import rocket from './assets/rocket.svg';

const RocketIcon = ({ size = 24, ...props }) => (
  <img alt="" src={rocket} style={{ height: size, width: size }} {...props} />
);

export default RocketIcon;
