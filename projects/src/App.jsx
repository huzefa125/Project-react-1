import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Details from './Components/Details';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;