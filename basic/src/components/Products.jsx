import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('뜨끈한 데이터를 잘 받아옴.');
        setProducts(data);
      });
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);
  return (
    <div>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
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
