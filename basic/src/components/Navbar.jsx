import React from 'react';
import Ava from './Ava';

const Navbar = ({ children }) => {
  return (
    <div>
      <header style={{ backgroundColor: 'yellow' }}>{children}</header>
    </div>
  );
};

export default Navbar;
