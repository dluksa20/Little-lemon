import React from 'react'
import SideNavbar from './components/navbar/SideNavbar'
import 'normalize.css';
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Profile from './pages/Profile'
import TopNavbar from './components/navbar/TopNavbar';




const App = () => {
  return (
    <div className='app'>
      <div className='side-navbar'>
        <SideNavbar />
      </div>
      <div className='top-navbar'>
        <TopNavbar />
      </div>
      <div className='page-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<Order />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App