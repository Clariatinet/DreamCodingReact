import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const ProductDetail = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button
        onClick={() => {
          toggleDarkMode();
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default ProductDetail;
