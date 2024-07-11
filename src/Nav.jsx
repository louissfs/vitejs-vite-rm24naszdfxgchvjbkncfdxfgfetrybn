import React from 'react';
import './App.css'; 
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">Wn Studio</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Vans">Video</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Nav;
