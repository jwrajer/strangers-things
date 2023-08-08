import Login from './Login/Login';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = ({ token, setToken }) => {

  return (
    <>  
      {token ? <h1>Dashboard</h1> : <Login setToken={setToken}/>}
    </>
  )
}

export default Dashboard