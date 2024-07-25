import React from 'react';
import "./Root.css"
function Root({ children }) {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      >
        <defs>
          <linearGradient id="bg">
            <stop offset="0%" style={{ stopColor: 'rgba(130, 158, 249, 0.06)' }} />
            <stop offset="50%" style={{ stopColor: 'rgba(76, 190, 255, 0.6)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(115, 209, 72, 0.2)' }} />
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
            s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
       
      </svg>
        {children}
    </>
  );
}

export { Root };
