import React, { useState } from 'react';
import Products from './components/Products';
import Product from './components/Products';

const AppProduct = () => {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button
        onClick={() => {
          setShowProducts((show) => {
            return !show;
          });
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default AppProduct;
