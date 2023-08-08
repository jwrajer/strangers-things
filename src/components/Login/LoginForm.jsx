import { useState } from 'react';

const LoginForm = () => {

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
    console.log(body);
  }

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input 
          name='username'
          id='username'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input 
          name='password'
          id='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log In</button>
      </form>
    </section>
  )
}

export default LoginForm