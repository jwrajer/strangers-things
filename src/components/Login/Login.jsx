import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <LoginForm />
      <p>Don't have an account already?<Link to='/sign-up'>Sign Up</Link></p>
    </>
  )
}

export default Login