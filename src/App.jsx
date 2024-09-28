
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact us/Contact';
import Donate from './Pages/Donate/Donate';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Success from './Pages/Donate/Success'; 
import Failure from './Pages/Donate/Failure'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location=useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Retrieve the authentication status from localStorage
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store in localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); 
  };


  return (
    <div>
      <ToastContainer />
      {isAuthenticated && location.pathname !== '/' && <Navbar onLogout={handleLogout} />}
     
      <Routes>
        <Route 
          path='/' 
          element={<Login onLogin={handleLogin} />}
        />
        <Route 
          path='/home' 
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
        />
        <Route 
          path='/about' 
          element={isAuthenticated ? <About /> : <Navigate to="/" />} 
        />
        <Route 
          path='/contact' 
          element={isAuthenticated ? <Contact /> : <Navigate to="/" />} 
        />
        <Route 
          path='/donate' 
          element={isAuthenticated ? <Donate /> : <Navigate to="/" />} 
        />
        <Route 
          path='/success' 
          element={<Success />} 
        />
        <Route 
          path='/failure' 
          element={<Failure />} 
        />
      </Routes>
    </div>
  );
};

export default App;