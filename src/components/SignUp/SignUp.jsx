import { useState } from 'react'
import SignUpForm from './SignUpForm'

const SignUp = () => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [message, setMessage] = useState('');

  const registerUser = async (input) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });
      const result = await response.json();
      result.success ? setMessage(result.data.message) : setMessage(result.error.message)
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <SignUpForm 
      registerUser={registerUser}
      message={message}
    />
  )
}

export default SignUp