import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import Nav from './Nav.jsx';
import U from './U.jsx';
import Min from './Min.jsx';
import Vans from './Vans.jsx';

import './index.css';
import "./server"


const Main = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Vans" element={<Vans />} />
      
    </Routes>
  </BrowserRouter>
  

  



);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
