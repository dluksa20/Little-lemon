import {React, useState} from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo  from '../../assets/images/logos/Logo.svg';
import { GoHome } from 'react-icons/go';
import { GiKnifeFork } from 'react-icons/gi';
import { MdOutlineTableRestaurant, MdOutlineShoppingCart } from 'react-icons/md';

const navLinks = [
  { title: 'Home', icon: <GoHome />, url: '/' },
  { title: 'Menu', icon: <GiKnifeFork />, url: '/menu' },
  { title: 'Reserve a table', icon: <MdOutlineTableRestaurant />, url: '/book' },
  { title: 'Order Online', icon: <MdOutlineShoppingCart />, url: '/order' },
];

const TopNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
        <div className='navbar-wrapper'>
          <div className='navbar-links-wrapper'>
            <div className='navbar-links' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
                {
                  navLinks.map(({ title, icon, url }, index)=>(
                    <NavLink key={index} to={url}>
                      {icon}
                      <span
                      className={`title ${isHovered ? 'visible' : ''}`}
                      >{title}</span>
                    </NavLink>
                  ))}
            </div>
          </div>
          
          <div className='navbar-border'>
            <div className='navbar-logo'>
              <Logo/>
            </div>
          </div>
          <div className='navbar-icons-wrapper'>
            <div className='navbar-icons'>
                <MdOutlineLightMode/>
                <MdOutlineShoppingCart/>
                <CgProfile/>
            </div>
          </div>
      </div>
  )
}

export default TopNavbar