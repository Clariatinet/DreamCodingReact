import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <article>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
