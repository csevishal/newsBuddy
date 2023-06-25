import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
    <header>
      <Link className="logo" to="/"> News<span>Buddy</span></Link>
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar">Menu</label>
      <nav className="navbar">
        <ul className="menu">
          <li><Link className="item" to="/">Home</Link></li>
          <li><Link className="item" to="/contact">Contact</Link></li>
          <li><Link className="item" to="/about">About</Link></li>
          <li><Link className="item" to="#">Services +</Link>
          <ul>
            <li><Link className="item" to={"#"}>Blogs</Link></li>
            <li><Link className="item" to={"#"}>Gallery</Link></li>
          </ul>
          
          
          </li>
        </ul>
      </nav>

    </header>


    </>
      
  );
};

export default Navbar;