import React from "react";

interface CarProps {
  imageUrl: string;
  model: string;
  type: string;
  make: string;
  year: number;
}

const Car: React.FC<CarProps> = ({ imageUrl, model, type, make, year }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={imageUrl} alt={`${model} - ${year}`} className="w-auto h-auto lg:max-w-lg lg:w-auto mx-auto mb-2" />
      <p className="text-xl font-semibold">{make}</p>
      <p className="text-xl font-semibold">{model}</p>
      <p className="text-gray-600">{year}</p>
    </div>
  );
};

export default Car;
