import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom'
import './TopNavbar.css'
import logo from '../../assets/images/logos/Logo.svg'

const TopNavbar = () => {
  return (
        <div className='navbar-top'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-icons-top'>
                <div className='mode-toggler'>
                    <MdOutlineLightMode />
                </div>

                <div className='profile-icon'>
                    <NavLink 
                    className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                    to='/profile'>
                        <CgProfile />
                    </NavLink>
                </div>
            </div>
        </div>
  )
}

export default TopNavbar