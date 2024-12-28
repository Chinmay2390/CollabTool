import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DocumentPage.css';  // Make sure the path is correct

const DocumentPage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentDescription, setDocumentDescription] = useState('');
  const [showForm, setShowForm] = useState(false); // To toggle form visibility
  const navigate = useNavigate();

  // Handle form submission
  const handleCreateDocument = async (e) => {
    e.preventDefault();

    // Get the token from localStorage (or wherever you saved it)
    const token = localStorage.getItem('token');

    // Check if token is available
    if (!token) {
      alert('You need to log in first.');
      navigate('/login');
      return;
    }

    try {
      // Send POST request to create the document
      const response = await axios.post(
        'http://localhost:5000/api/documents/create', // Replace with your endpoint
        {
          title: documentName,
          content: documentDescription
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Include token in Authorization header
          }
        }
      );

      alert('Document created successfully!');
      // Optionally, redirect or update the page
      navigate('/DocumentPage'); // Redirect to the same page or another page
    } catch (error) {
      console.error('Error creating document:', error);
      alert('Error creating document. Please try again.');
    }
  };

  return (
    <div>
      <h1>Document Page</h1>
      
      {/* Button to show form */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Create New Document'}
      </button>

      {/* Form to create new document */}
      {showForm && (
        <form onSubmit={handleCreateDocument}>
          <div>
            <label>Document Name:</label>
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Document Description:</label>
            <textarea
              value={documentDescription}
              onChange={(e) => setDocumentDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Document</button>
        </form>
      )}
    </div>
  );
};

export default DocumentPage;
