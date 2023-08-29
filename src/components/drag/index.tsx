import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Drag() {
  return (
    <div>
      <Skeleton count={10} /> 
    </div>
  );
}

export default Drag;
