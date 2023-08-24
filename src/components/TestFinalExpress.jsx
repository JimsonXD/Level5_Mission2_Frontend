import React, { useState } from 'react';
import axios from 'axios';
// import Car from '../Car'; // Assuming this is the component to display car details
import { cars } from '../CarsData';



const TestFinalExpress = () => {
  const [image, setImage] = useState(null);
  const [predictedCarType, setPredictedCarType] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
    setPredictedCarType(null);
    setFilteredCars([]);
  };

  const handleSubmit = async () => {
    if (!image) {
      throw new Error("Image missing.");
    }

    const formData = new FormData();
    formData.append('image', image);


    try {
      const response = await axios.post('http://localhost:8080/api/upload', formData);
      const { predictedType, filteredCarsByType } = response.data;

      setPredictedCarType(predictedType);

      if (['sedan', 'hatchback', 'ute', 'van', 'suv'].includes(predictedType)) {
        const carsOfType = cars.filter(car => car.type.toLowerCase() === predictedType);
        setFilteredCars(carsOfType);
      } else {
        setFilteredCars([]);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Car Finder</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upload Car Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </div>
          {predictedCarType && (
            <div className="bg-yellow p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Predicted Car Type: {predictedCarType}
              </h2>
              <h3 className="text-lg font-semibold mb-4">
                Cars of {predictedCarType} Type:
              </h3>
              <div className="bg-pink flex flex-wrap gap-6 p-6">
                {filteredCars.map((car, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 shadow-md rounded-lg mb-4"
                  >
                    <img
                      src={car.imageUrl}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-auto mb-2 rounded-lg"
                    />
                    <h4 className="text-lg font-semibold">
                      {car.make} {car.model}
                    </h4>
                    <p className="text-gray-600">{car.type}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TestFinalExpress;