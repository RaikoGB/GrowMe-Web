import React from 'react';
import googlepPlay from '../../../Assets/movile/googlepPlay.png';

const Movile: React.FunctionComponent = () => {
  return (
    <>
      <a href="../../../Assets/movile/apk.txt" download>
        <img src={googlepPlay} alt="APK"></img>
      </a>
    </>
  );
};

export default Movile;
