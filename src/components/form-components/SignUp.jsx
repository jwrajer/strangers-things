const SignUp = () => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const registerUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

        })
      });
      const result = await response.json();
      console.log(result);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <section>
      <form>
        <input/>
        <input/>
      </form>
      <button onClick={registerUser}>Test</button>
    </section>
  )
}

export default SignUp