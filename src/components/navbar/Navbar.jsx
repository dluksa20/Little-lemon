import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { GiKnifeFork } from 'react-icons/gi'
import { MdOutlineTab } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoMoonOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    const navIcons = [
        {
            icon: <IoMoonOutline />,
            link: '/theme',
        },
        {
            icon: <CgProfile />,
            title: 'Profile',
            link: '/profile',
        }
    ];

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
            icon: <MdOutlineTab />,
            url: '/book'
        },
        {
            title: 'Order',
            icon: <MdOutlineShoppingCart />,
            url: '/order'
        }
    ];

    const handleLinkClick = (url) => {
        setActiveLink(url);
    }

    return (
        <nav className='nav-wrapper'>
            <div className='nav-links'>
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.url}
                        className={`nav-link ${location.pathname === link.url || activeLink === link.url ? 'active' : ''}`}
                        onClick={() => handleLinkClick(link.url)}
                    >
                        {link.icon}
                        <span>{link.title}</span>
                    </Link>
                ))}
            </div>

            <div className='nav-icons'>
                {navIcons.map((icon, index) => (
                    <Link
                        key={index}
                        to={icon.link}
                        className={`nav-icon ${location.pathname === icon.link || activeLink === icon.link ? 'active' : ''}`}
                        onClick={() => handleLinkClick(icon.link)}
                    >
                        {icon.icon}
                        <span>{icon.title}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
