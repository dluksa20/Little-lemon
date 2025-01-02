import React from 'react'
import './Navbar.css'
import { GoHome } from 'react-icons/go'
import { GiKnifeFork } from 'react-icons/gi'
import { MdOutlineTableRestaurant } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'  
import { NavLink } from 'react-router-dom'

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
    <nav className='nav-wrapper'>
        <div className="nav-links">
            {
                navLinks.map((link, index) => (
                <NavLink 
                    key={index} 
                    to={link.url}>
                    {({ isActive }) => (
                    <span className={`nav-item ${isActive ? "active" : ""}`}>
                        {link.icon} {link.title}
                    </span>
                    )}
                </NavLink>
                ))
            }
            </div>

        <div className='mode-toggler'>

        </div>
        <div className='profile-icon'>

        </div>

    </nav>
  )
}

export default Navbar