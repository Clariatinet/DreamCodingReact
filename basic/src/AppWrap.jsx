import React from 'react';
import Navbar from './components/Navbar';
import Ava from './components/Ava';

const AppWrap = () => {
  return (
    <div>
      <Navbar>
        <Ava
          image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
          name='bob'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
};

export default AppWrap;
