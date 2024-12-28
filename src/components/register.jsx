import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Alert for debugging
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);

    try {
      // Send POST request to the backend for registration
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
      });

      // Alert for successful registration
      alert('Registration successful! Please log in.');
      
      // Optionally, navigate to login page after successful registration
      // navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error occurred while registering. Please try again.');
    }
  };


  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
