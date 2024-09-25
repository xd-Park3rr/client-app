import React, { useState } from 'react';
import axios from 'axios';

const YourWebsite = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [file, setFile] = useState(null);

  // Function to start the VM
  const startVM = async () => {
    try {
      const response = await axios.post('/api/start-vm');
      setStatusMessage(response.data);
    } catch (error) {
      console.error('Error starting the VM:', error);
      setStatusMessage('Failed to start VM.');
    }
  };

  // Function to stop the VM
  const stopVM = async () => {
    try {
      const response = await axios.post('/api/stop-vm');
      setStatusMessage(response.data);
    } catch (error) {
      console.error('Error stopping the VM:', error);
      setStatusMessage('Failed to stop VM.');
    }
  };

  // Function to upload a file to Azure Blob Storage
  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatusMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload-file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatusMessage(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setStatusMessage('Failed to upload file.');
    }
  };

  return (
    <div className="azure-container">
      <h1>Manage Your Azure Resources</h1>

      <div className="vm-control">
        <button onClick={startVM}>Start Virtual Machine</button>
        <button onClick={stopVM}>Stop Virtual Machine</button>
      </div>

      <div className="file-upload">
        <h2>Upload a File to Azure Blob Storage</h2>
        <form onSubmit={uploadFile}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button type="submit">Upload</button>
        </form>
      </div>

      <div className="status-message">
        <p>{statusMessage}</p>
      </div>
    </div>
  );
};

export default YourWebsite;