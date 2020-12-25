import React from 'react';
import { Link } from "react-router-dom";
import  '../styles/Navbar.css';

export default function Navbar() {
  return(
      <div className="Home-navbar">
        <div className="nav-link-container-left">ALICIA'S FOOD JOURNAL</div>
        <div className="nav-link-container-right">
          <Link className="navbar-link" to="/">
            Journal
          </Link>
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </div>
      </div>
  );
}