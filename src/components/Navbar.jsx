import { Link } from 'react-router-dom'

const Navbar = ({ token, setToken }) => {

  return (
    <section id='navbar'>
      <Link to='/'>Posts</Link>
      {/* <Link to='/dash'>{token ? 'Dashboard' : 'Log In'}</Link> */}
      {token ? <Link to='/user/dashboard'>Dashboard</Link> : <Link to='/user/login'>Log In</Link>}
      {token && <button onClick={() => setToken()}>Sign Out</button>}
    </section>
  )
}

export default Navbar