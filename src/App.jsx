import React from 'react'
import 'normalize.css';
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Profile from './pages/Profile'
import Navbar from './components/navbar/Navbar';





const App = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<Order />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>  
      <footer>footer</footer>
    </>
  )
}

export default App
