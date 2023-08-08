import { useState, useEffect } from 'react'

const Posts = () => {

  const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        setCurrentPosts(data.data.posts);
      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts();
  }, [])

  return (
    <>
    {currentPosts.map(post => {
      return (
        <section className='post' id={post.id} key={post.id}>
          <section className='postHead' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.price}</p>
            <p>{post.description}</p>
          </section>
          <section className='postInfo' key={post.id}>
            <h4>Location:</h4><p>{post.location}</p>
          </section>
        </section>
      )
    })}
    </>
  )
}

export default Posts