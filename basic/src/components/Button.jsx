import React from 'react';

const Button = ({ text, onClick }) => {
  console.log('Button', text, 're-rendering');
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '20px',
          margin: '0.4rem',
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
