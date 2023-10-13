import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Login from './Components/Login';
import { Registration } from './Components/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/registration" element={<Registration />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
