import CreateListingForm from './CreateListingForm'
import { useNavigate } from 'react-router-dom';

const CreateListing = ({ token }) => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const navigate = useNavigate();

  const makeListing = async (input) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(input)
      });
      const result = await response.json();
      navigate('/user/dashboard');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CreateListingForm makeListing={makeListing}/>
  )
}

export default CreateListing