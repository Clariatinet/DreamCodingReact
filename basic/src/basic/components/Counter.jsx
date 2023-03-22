import React, { useState } from 'react';

const Counter = ({ total, onClick }) => {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>
        {count} <span>/{total}</span>
      </span>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
          onClick();
        }}
      >
        ADD +
      </button>
    </div>
  );
};

export default Counter;
