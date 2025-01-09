import {React, useState} from 'react';
import './SideNavbar.css';
import { GoHome } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';  
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';


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
    const [isOpen, setIsOpen] = useState(null)

    const expandSidebar = () => {
        setIsOpen(true)
    }
    const colapseSidebar = () => {
        setIsOpen(false)
    }

  return (
    <div className={`aside-wrapper ${isOpen  ? "expand" : "colapse"}`} onMouseEnter={expandSidebar} onMouseLeave={colapseSidebar}>
        <div className={`nav-links ${isOpen  ? "nav-links-expanded" : ""}`}>
            <div className='navigation-icons'>
                {navLinks.map((link, index) => (
                    <NavLink 
                        key={index} 
                        to={link.url} 
                        className={({ isActive }) => `nav-item-aside ${isActive ? "active" : ""}`}
                    >
                        {link.icon } {isOpen ? link.title: ''}
                    </NavLink>
                ))}
            </div>
            <div className='social-icons'>
                <FiTwitter />
                <AiOutlineFacebook />
                <FaInstagram />
            </div>
        </div>

    </div>
  );
};

export default Navbar;
