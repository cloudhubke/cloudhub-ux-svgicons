import React from 'react';
import letterVRound from './assets/letter-v-round.svg';

const LetterVRoundIcon = ({ size = 24, ...props }) => (
  <img
    alt=""
    src={letterVRound}
    style={{ height: size, width: size }}
    {...props}
  />
);

export default LetterVRoundIcon;
