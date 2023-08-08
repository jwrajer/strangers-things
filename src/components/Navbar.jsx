import { Link } from 'react-router-dom'

const Navbar = ({ token, setToken }) => {

  return (
    <section id='navbar'>
      <section>
        <Link to='/'>Listings</Link>
        {token && <Link to='/create'>Sell</Link>}
      </section>
      {token ? <Link to='/user/dashboard'>Dashboard</Link> : <Link to='/user/login'>Log In</Link>}
      {token && <button onClick={() => setToken()}>Sign Out</button>}
    </section>
  )
}

export default Navbar