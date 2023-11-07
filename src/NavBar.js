import React from 'react';
import './NavBar.css';

const Navbar = ({ handleNavItemClick, items, selectedItem, mainBar }) => {

  return (
    <nav className={`navbar${mainBar ? ' navbar-header' : ''}`}>
      {mainBar && <span className='logo'>Events at BYU</span>}
      <ul className="navbar-nav">
        {items.map((item, index) => (
            <li className={`nav-item ${selectedItem === index ? 'active' : ''}`} key={index} onClick={() => handleNavItemClick(index)}>
              {item}
            </li>
        ))}
      </ul>
      {mainBar && (<span className='top-right button' onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>
        <i class="fa-solid fa-up-long"></i> Return to Top
        </span>)}
    </nav>
  );
};

export default Navbar;
