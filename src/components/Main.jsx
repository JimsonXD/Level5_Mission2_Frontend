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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Car Finder</h1>
        <Dropzone onDrop={acceptedFiles => setSelectedFile(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg mb-4" {...getRootProps()}>
              <input {...getInputProps()} />
              {selectedFile ? (
                <p>Selected File: {selectedFile.name}</p>
              ) : (
                <p>Click to upload an image</p>
              )}
            </div>
          )}
        </Dropzone>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleFileUpload}
        >
          Find Similar Cars
        </button>
        <div className="mt-4">
          {similarCars.length > 0 && renderSimilarCars()}
        </div>
      </div>
    </div>
  );
}

export default Main;
