import React, { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/logos/logo.png';
import { GoHome } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineTableRestaurant, MdOutlineShoppingCart } from 'react-icons/md';
import { RiMenu3Fill, RiCloseFill, RiTwitterXFill, RiFacebookBoxFill, RiInstagramLine  } from "react-icons/ri";
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";


const navLinks = [
  { title: 'Home', icon: <GoHome />, url: '/' },
  { title: 'Menu', icon: <GiKnifeFork />, url: '/menu' },
  { title: 'Reserve', icon: <MdOutlineTableRestaurant />, url: '/book' },
  { title: 'Order', icon: <MdOutlineShoppingCart />, url: '/order' },
];

const TopNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-logo'>
        <img src={Logo} alt="" />
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
      <div className="navbar-icons-hamburger">
        <button className='hamburger-btn' onClick={() => setDropdownOpen(!dropdownOpen)}>
          {dropdownOpen ? <RiCloseFill  className='close-bt'/>: <RiMenu3Fill />}
        </button>
        <div className={`dropdown-list ${dropdownOpen ? 'show' : ''}`}>
          <div className='profile-section'>
            <CgProfile />
            <button>Log in</button>
            <button>Sign Up</button>
          </div>
          <div className="dropdown-items">
            {navLinks.map(({ title, icon, url }, index) => (
              <NavLink key={index} to={url}>
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            ))}
          </div>
          <div className='socials'>
              <RiFacebookBoxFill />
              <RiInstagramLine />
              <RiTwitterXFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
