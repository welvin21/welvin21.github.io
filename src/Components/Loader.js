import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/loader.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
};

export const Loader = () => {
  return (
    <Lottie
      options={defaultOptions}
      style={{ backgroundColor: '#000' }}
      height="100vh"
      width="100vw"
    />
  );
};
