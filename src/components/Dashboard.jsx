import SignUp from './form-components/SignUp'

const Dashboard = () => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



  return (
    <>
      <h1>Dashboard</h1>
      <SignUp />
    </>
  )
}

export default Dashboard