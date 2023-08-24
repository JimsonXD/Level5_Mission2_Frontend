import React, { useState } from "react";
import axios from "axios";
import { cars } from "../CarsData";

// import Car from "../Car";

const Main = () => {
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

    formData.append("image", image);

    try {
      const predictionResponse = await axios.post(
        "https://carimaging-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/c36bf7d8-ce8c-4f6c-8369-3662621c299b/detect/iterations/Iteration1/image",

        formData,

        {
          headers: {
            "Prediction-Key": "6887eb37ac004947a80cfa2cac0f7768",
          },
        }
      );

      console.log("Azure Custom Vision Response:", predictionResponse.data);

      const predictions = predictionResponse.data.predictions;

      if (predictions.length > 0) {
        const predictedType = predictions[0].tagName.toLowerCase();

        setPredictedCarType(predictedType);

        const filteredCarsByType = cars.filter((car) => car.color.toLowerCase() === predictedType);

        setFilteredCars(filteredCarsByType);
      } else {
        setPredictedCarType(null);

        setFilteredCars([]);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <main>
      <div className="bg-lightgrey flex justify-center p-12 mb-2">
        <div>
          <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
            <h1 className="flex justify-center text-xl font-bold mb-8">By Colour</h1>
            <div>
              <div>
                <div className="border-dashed border-2 border-turnersgrey p-10 rounded-lg mt-10">
                  <div className="flex justify-center">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="m4" />
                  </div>
                </div>

                <div className="flex justify-center m-4">
                  <button onClick={handleSubmit} className="bg-turnersblue text-white font-semibold py-2 px-4 mt-6 rounded hover:bg-turnersred transition-colors duration-700">
                    Find My New Car!
                  </button>
                </div>
              </div>
              <div className="bg-turnersblue">
                {predictedCarType && (
                  <div className="bg-yellow p-6 shadow-md rounded-lg">
                    <h2 className="flex justify-center text-white text-xl font-semibold mb-4">You uploaded a {predictedCarType} vehicle.</h2>

                    <h3 className="flex justify-center text-white text-xl font-semibold mb-4">Take your pick!</h3>

                    <div className="bg-pink flex flex-wrap gap-6 p-6">
                      {filteredCars.map((car, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg mb-4">
                          <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-auto mb-2 rounded-lg" />

                          <h4 className="text-lg font-semibold">
                            {car.make} {car.model}
                          </h4>

                          <p className="text-gray-600">{car.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
