import React from 'react';
import notfound from '../../assets/images/dribbble_1.gif';
const Notfound = () => {
  return (
    <div className=' flex justify-center items-center'>
      <img src={notfound} alt="Not Found" />
    </div>
  );
};

export default Notfound;