import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
