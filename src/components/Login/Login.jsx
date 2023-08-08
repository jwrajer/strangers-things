import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>Login Form</h1>
      <p>Don't have an account already?<Link to='/sign-up'>Sign Up</Link></p>
    </>
  )
}

export default Login