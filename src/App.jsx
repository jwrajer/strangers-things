import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Dashboard from './components/Dashboard/Dashboard'
import SignUp from './components/SignUp/SignUp'
import CreateListing from './components/CreateListing/CreateListing'
import './App.css'

function App() {

  const [token, setToken] = useState();

  useEffect(() => {
    
  },[token])

  return (
    <>
      <Navbar token={token} setToken={setToken}/>

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/create' element={<CreateListing token={token}/>} />
        <Route path='/user/:token' element={<Dashboard token={token} setToken={setToken}/>} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
