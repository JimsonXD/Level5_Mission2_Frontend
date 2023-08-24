import React, { useState } from 'react';
import axios from 'axios';
import { cars } from '../CarsData';
import Car from '../Car';

const TestFinal = () => {
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
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const predictionResponse = await axios.post(
        'https://imagerecognitionvision-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/c61d4975-cd46-46f0-8cca-239762f32294/classify/iterations/Iteration3/image',
        formData,
        {
          headers: {
            'Prediction-Key': '1e8b68737a164c62862ff4f63ab5b180',
          },
        }
      );

      console.log('Azure Custom Vision Response:', predictionResponse.data);
      const predictions = predictionResponse.data.predictions;
      if (predictions.length > 0) {
        const predictedType = predictions[0].tagName.toLowerCase();
        setPredictedCarType(predictedType);

        const filteredCarsByType = cars.filter(
          (car) => car.type.toLowerCase() === predictedType
        );
        setFilteredCars(filteredCarsByType);
      } else {
        setPredictedCarType(null);
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

export default TestFinal;
