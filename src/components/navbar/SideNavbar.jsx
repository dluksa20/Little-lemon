import React from 'react'
import './SideNavbar.css'
import { GoHome } from 'react-icons/go'
import { GiKnifeFork } from 'react-icons/gi'
import { MdOutlineTableRestaurant } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'  
import { NavLink } from 'react-router-dom'
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


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


  return (
    <div className='aside-wrapper'>
        <div className="nav-links">
            {navLinks.map((link, index) => (
                <NavLink 
                key={index} 
                to={link.url} 
                className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                >
                {link.icon} {link.title}
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Navbar