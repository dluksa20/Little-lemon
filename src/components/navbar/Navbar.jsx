import React, { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/logos/Logo.svg';
import { GoHome } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineTableRestaurant, MdOutlineShoppingCart } from 'react-icons/md';

const navLinks = [
  { title: 'Home', icon: <GoHome />, url: '/' },
  { title: 'Menu', icon: <GiKnifeFork />, url: '/menu' },
  { title: 'Reserve', icon: <MdOutlineTableRestaurant />, url: '/book' },
  { title: 'Order', icon: <MdOutlineShoppingCart />, url: '/order' },
];

const TopNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-logo'>
        <Logo />
        <span>Little Lemon</span>
      </div>

      <div className='navbar-links'>
        {navLinks.map(({ title, icon, url }, index) => (
          <NavLink
            key={index}
            to={url}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`nav-item ${hoveredIndex === index ? 'hovered' : ''}`}
            activeClassName="active"
          >
            <span className="nav-icon">{icon}</span>
            <span className={`nav-title ${hoveredIndex === index ? 'visible' : 'hidden'}`}>
              {title}
            </span>
          </NavLink>
        ))}
      </div>

      <div className='navbar-icons-wrapper'>
        <MdOutlineLightMode />
        <CgProfile />
      </div>
    </div>
  );
};

export default TopNavbar;
