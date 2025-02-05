import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
import logo from '/src/assets/logo.jpeg';  // ✅ Absolute import
export default function Layout() {
    return (
    <>
      <header>
        {/* ✅ Display the new logo */}
        <img src={logo} alt="logo" className="logo" width="400px" height="200px" />
        
        <h1>My Portfolio</h1>
        
        {/* ✅ Navigation Bar */}
        <nav>
          <Link to="/">Home</Link> |  
          <Link to="/about">About</Link> |  
          <Link to="/education">Education</Link> |  
          <Link to="/project">Projects</Link> |  
          <Link to="/services">Services</Link> |  
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <hr />
    </>
    );
   }
