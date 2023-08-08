import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section id='navbar'>
      <Link to='/'>Posts</Link>
      <Link to='/dash'>Dashboard/Login</Link>
    </section>
  )
}

export default Navbar