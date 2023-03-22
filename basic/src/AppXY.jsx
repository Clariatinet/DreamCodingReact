import React, { useState } from 'react';
import '../src/AppXY.css';

const APPXY = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      className='container'
      onPointerMove={(event) => {
        console.log(event.clientX, event.clientY);
        // setPosition({ x: event.clientX, y: event.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        setPosition((prev) => ({
          ...prev,
          x: event.clientX,
        }));
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
};

export default APPXY;
