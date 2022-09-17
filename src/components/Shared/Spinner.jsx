import React from 'react';
import { CircleLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
      <CircleLoader
        color="#36d7b7"
        size={170}
      />
    </div>
  );
};

export default Spinner;