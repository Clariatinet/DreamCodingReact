import React from 'react';

const Avatar = ({ image, isNew }) => {
  return (
    <div className='avatar'>
      <img className='photo' src={image} alt='avatar' />
      {isNew && <p className='new'>NEW</p>}
    </div>
  );
};

export default Avatar;
