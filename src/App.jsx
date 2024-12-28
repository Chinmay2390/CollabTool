
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/Home";
import DocumentPage from './components/DocumentPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <nav className="navbar">
          <h1>CollabTool</h1>
          <div>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/DocumentPage" element={<DocumentPage />} /> {/* Route for DocumentPage */}
            <Route path="*" element={<NotFoundPage />} /> {/* Optional 404 page */}
          </Routes>
        </main>
      </header>
      </Router>
      
    </div>
  );
}

export default App;

