import Login from '../Login/Login';
import DashboardDisplay from './DashboardDisplay';

const Dashboard = ({ token, setToken }) => {

  return (
    <>  
      {token ? <DashboardDisplay token={token}/> : <Login setToken={setToken}/>}
    </>
  )
}

export default Dashboard