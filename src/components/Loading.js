// Loading.js
import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/img/animation.json';
import staticimg from "../assets/img/rawa.png";

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Loading() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
      }}>
        <img src={staticimg} alt="Background" style={{ width: 'auto', height: 'auto', maxWidth: '300px', maxHeight: '300px' }} />
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          
        }}>
          <Lottie options={defaultOptions} height={'100px'} width={'100px'} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
