import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllServices from './components/AllServices';
import YourWebsite from './components/YourWebsite';
import LoginTerminal from './components/LoginTerminal';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AllServices" element={<AllServices />} />
        <Route path="/YourWebsite" element={<YourWebsite />} />
        <Route path="/LoginTerminal" element={<LoginTerminal />} />
      </Routes>
    
    </Router>
  );
};

export default App;
