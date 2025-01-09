import React, { useState } from 'react';
import './SideNavbar.css';
import { GoHome } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineTableRestaurant, MdOutlineShoppingCart, MdOutlineLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// Navigation links data
const navLinks = [
  { title: 'Home', icon: <GoHome />, url: '/' },
  { title: 'Menu', icon: <GiKnifeFork />, url: '/menu' },
  { title: 'Book', icon: <MdOutlineTableRestaurant />, url: '/book' },
  { title: 'Order', icon: <MdOutlineShoppingCart />, url: '/order' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Toggles sidebar state
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`aside-wrapper ${isOpen ? "expand" : "collapse"}`}>
      {/* Sidebar Links */}
      <div className={`nav-links ${isOpen ? "nav-links-expanded" : ""}`}>
        {/* Profile and Mode Toggle */}
        <div className="profile-icon">
          <NavLink className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} to="/profile">
            <CgProfile />
          </NavLink>
          <div className="mode-toggler">
            <MdOutlineLightMode />
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="navigation-icons">
          {navLinks.map(({ title, icon, url }, index) => (
            <NavLink
              key={index}
              to={url}
              className={({ isActive }) => `nav-item-aside ${isActive ? "active" : ""}`}
            >
              {icon} {isOpen && title}
            </NavLink>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <FiTwitter />
          <AiOutlineFacebook />
          <FaInstagram />
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-btn" onClick={toggleSidebar}>
        {isOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
      </button>
    </div>
  );
};

export default Navbar;
