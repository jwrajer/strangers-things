import { Link } from 'react-router-dom'

const Navbar = ({ token }) => {

  return (
    <section id='navbar'>
      <Link to='/'>Posts</Link>
      {/* <Link to='/dash'>{token ? 'Dashboard' : 'Log In'}</Link> */}
      {token ? <Link to='/user/dashboard'>Dashboard</Link> : <Link to='/user/login'>Log In</Link>}
    </section>
  )
}

export default Navbar