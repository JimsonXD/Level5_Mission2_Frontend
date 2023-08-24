import React from "react";
import ByType from "./ByType"; // Import the "Main" component
import ByColour from "./ByColour"; // Import the "Main 2" component

const Main = () => {
  return (
    <div className="bg-lightgrey flex flex-col justify-center">
      <div className="bg-turnersblue p-8">
        <h1 className="text-3xl text-center text-white font-bold mb-8">Find-A-Car</h1>
        <h1 className="text-lg text-center text-white font-regular mb-4">Use our AI (Artificial Intelligence) model to find your next car.</h1>
        <h1 className="text-lg text-center text-white font-regular mb-4">Upload a picture of the car you want below and then click 'Find My Car'.</h1>
      </div>
      <div className="flex justify-center mt-8">
        <ByType />
        <ByColour />
      </div>
    </div>
  );
};

export default Main;
