import Login from './Login/Login';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = ({ token }) => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


  return (
    <>  
      {token ? <h1>Dashboard</h1> : <Login />}
    </>
  )
}

export default Dashboard