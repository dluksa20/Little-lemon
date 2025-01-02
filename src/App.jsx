import React from 'react'
import Navbar from './components/navbar/Navbar'
import 'normalize.css';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Menu from './pages/Menu'
import Order from './pages/Order'




const App = () => {
  return (
    <>
      <Navbar />
      <div className='page-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
    </>
  )
}

export default App