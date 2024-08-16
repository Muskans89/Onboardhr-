import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Home component as the default route */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
}

export default App;
