import {React, useState} from 'react';
import './SideNavbar.css';
import { GoHome } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';  
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";

const navLinks = [
    {
        title: 'Home',
        icon: <GoHome />,
        url: '/'
    },
    {
        title: 'Menu',
        icon: <GiKnifeFork />,
        url: '/menu'
    },
    {
        title: 'Book',
        icon: <MdOutlineTableRestaurant />,
        url: '/book'
    },
    {
        title: 'Order',
        icon: <MdOutlineShoppingCart />,
        url: '/order'
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className={`aside-wrapper ${isOpen  ? "expand" : "colapse"}`}>
        <div className={`nav-links ${isOpen  ? "nav-links-expanded" : ""}`}>
            {navLinks.map((link, index) => (
                <NavLink 
                    key={index} 
                    to={link.url} 
                    className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                >
                    {link.icon} {isOpen ? link.title: ''}
                </NavLink>
            ))}
        </div>
        <button className='expand-aside-btn' onMouseEnter={toggleSidebar}>
            <FaChevronRight/>
        </button>
    </div>
  );
};

export default Navbar;
