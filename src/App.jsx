import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp/SignUp'
import './App.css'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
