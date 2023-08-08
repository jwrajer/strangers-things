import { useState, useEffect } from 'react'

const DashboardDisplay = ({ token }) => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [myData, setMyData] = useState();

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const result = await response.json();
        setMyData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMyData();
  },[])

  return (
    <section>
      <h1>Dashboard Display</h1>
      <h2>Username</h2>
      {myData && <p>{myData.username}</p>}
      <section>
        <h2>Messages</h2>
        {myData && <p>{myData.messages.map(message => {
          return <h1>test</h1>
        })}</p>}
      </section>
      <section>
        <h2>My Posts</h2>
        {myData && <p>{myData.posts.map(post => {
          return (
            <section className='dashboard-posts'>
              <h3>{post.title}</h3>
              <p>{post.createdAt}</p>
              <p>{post.description}</p>
            </section>
          )
        })}</p>}
      </section>
    </section>
  )
}

export default DashboardDisplay