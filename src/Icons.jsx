import React from 'react';

const Icons = ({ imageUrl, icontitle}) => {
  return (
    <div>
        <img src={imageUrl} alt="" />
        <p>{icontitle}</p>
    </div>
  );
}

export default Icons;