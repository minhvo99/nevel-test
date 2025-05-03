import React from 'react';
import { ReactSVG } from 'react-svg';
import './Icon.scss';

const Icon = ({ icon }) => {
  return (
    <>
      <ReactSVG src={`/assets/svg/${icon}.svg`} />
    </>
  );
};

export default Icon;
