import { useState } from 'react';

const SignUpForm = ({ registerUser, message }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      user: {
        username,
        password,
      }
    }
    registerUser(body);
  }

  return (
    <section>
      {message && <p>{message}</p>}
      <form onSubmit={submitHandler}>
        <input 
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </section>
  )
}

export default SignUpForm