import React from 'react';
import './NavBar.css';

const Navbar = ({ handleNavItemClick, items, selectedItem }) => {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        
        {items.map((item, index) => (
            <li className={`nav-item ${selectedItem === index ? 'active' : ''}`} key={index}>
                <a onClick={() => handleNavItemClick(index)}>{item}</a>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
