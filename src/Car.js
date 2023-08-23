import React from 'react';

const Car = ({ imageUrl, model, type, make }) => {
  return (
<div className="bg-white p-4 shadow-md rounded-lg">
  <img
    src={imageUrl}
    alt={`${model} - ${type}`}
    className="w-auto h-auto lg:max-w-lg lg:w-auto mx-auto mb-2"
  />
  <p className="text-xl font-semibold">{make}</p>
  <p className="text-xl font-semibold">{model}</p>
  <p className="text-gray-600">{type}</p>
</div>

  );
};

export default Car;

