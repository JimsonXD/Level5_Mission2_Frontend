import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

function Main() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [similarCars, setSimilarCars] = useState([]);

  const handleFileUpload = async () => {
    if (!selectedFile) {
      return;
    }
  
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (event.target && event.target.result) {
          const base64Data = event.target.result.split(',')[1];
          const response = await axios.post('http://localhost:8080/api/upload', { imageData: base64Data });
          const newSimilarCars = response.data.similarCars || [];
          setSimilarCars(newSimilarCars);
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const renderSimilarCars = () => {
    if (similarCars.length > 0) {
      return (
        <div>
          <h2 className="text-lg font-semibold mb-2">Similar Cars:</h2>
          <ul className="list-disc pl-6">
            {similarCars.map((car, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>No similar cars found.</p>;
    }
  };

  return (
    <div className="bg-lightgrey flex justify-center p-12 mb-2">
      <div>
        <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
          <h1 className="flex justify-center text-3xl font-bold mb-8">Find-A-Car</h1>
          <h1 className="text-lg font-regular mb-4">Use our AI (Artificial Intelligence) model to find your next car.</h1>
          <h1 className="text-lg font-regular mb-4">Upload a picture of the car you want below and then click 'Find My Car'.</h1>
          <Dropzone onDrop={(acceptedFiles, fileRejections, event) => setSelectedFile(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <div className="border-dashed border-2 border-turnersgrey p-10 rounded-lg mt-10" {...getRootProps()}>
                <input {...getInputProps()} />
                {selectedFile ? <p className="flex justify-center">Selected File: {selectedFile.name}</p> : <p className="flex justify-center">Click to upload an image</p>}
              </div>
            )}
          </Dropzone>
          <div className="flex justify-center mt-10">
            <button className="bg-turnersblue text-white font-semibold py-2 px-4 rounded hover:bg-turnersred transition-colors duration-700" onClick={handleFileUpload}>
              Find My New Car
            </button>
          </div>
          <div className="mt-4">{similarCars.length > 0 && renderSimilarCars()}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
