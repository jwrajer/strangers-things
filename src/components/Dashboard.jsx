import SignUp from './SignUp/SignUp'
import { Link, Route, Routes } from 'react-router-dom'

const Dashboard = () => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



  return (
    <>
      <h1>Dashboard</h1>
      <p>Don't have an account already?<Link to='/sign-up'>Sign Up</Link></p>
    </>
  )
}

export default Dashboard