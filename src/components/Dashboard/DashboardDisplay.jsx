import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardDisplay = ({ token }) => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [myData, setMyData] = useState();
  const navigate = useNavigate();

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

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result)
    } catch (err) {
      console.error(err);
    }
    Navigate('/user/dashboard');
  }

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
        {myData && myData.posts.map(post => {
          return (
            <section className='dashboard-posts'>
              <h3>{post.title}</h3>
              <p>{post.createdAt}</p>
              <p>{post.description}</p>
              <button onClick={() => deletePost(post._id)}>Delete</button>
            </section>
          )
        })}
      </section>
    </section>
  )
}

export default DashboardDisplay