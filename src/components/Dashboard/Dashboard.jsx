import Login from '../Login/Login';
import DashboardDisplay from './DashboardDisplay';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = ({ token, setToken }) => {

  return (
    <>  
      {token ? <DashboardDisplay token={token}/> : <Login setToken={setToken}/>}
    </>
  )
}

export default Dashboard