import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './LoginForm';

const Login = ({ setToken }) => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [message, setMessage] = useState();

  const login = async (input) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });
      const result = await response.json();
      result.success ? setMessage(result.data.message) : setMessage(result.error.message);
      result.success && setToken(result.data.token);
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <>
      {message && <p>{message}</p>}
      <LoginForm login={login}/>
      <p>Don't have an account already?<Link to='/sign-up'>Sign Up</Link></p>
    </>
  )
}

export default Login