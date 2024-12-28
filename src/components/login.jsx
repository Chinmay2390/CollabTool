import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Alert for debugging
    alert(`Email: ${email}\nPassword: ${password}`);

    try {
      // Send POST request to the backend for login
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      // Store the token in localStorage (or sessionStorage)
      localStorage.setItem('token', response.data.token);

      
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');

      // Log the token to the console
      console.log('Saved Token:', token);

      // Alert for successful login
      alert('Login successful!');
      
      // Navigate to the DocumentPage or Dashboard
      navigate('/DocumentPage');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
