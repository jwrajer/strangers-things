import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp/SignUp'
import './App.css'

function App() {
  
  const [token, setToken] = useState(true);

  return (
    <>
      <Navbar token={token}/>

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/dash' element={<Dashboard token={token}/>} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
