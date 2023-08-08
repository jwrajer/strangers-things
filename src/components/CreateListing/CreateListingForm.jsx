import { useState } from 'react'

const CreateListingForm = ({ makeListing }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState();
  const [willDeliver, setWillDeliver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      post: {
        title,
        description,
        price,
        location,
        willDeliver
      }
    }
    makeListing(body)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='title'>title</label>
        <input 
          required
          name='title'
          id='title'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      <label htmlFor='description'>description</label>
        <input 
          required
          name='description'
          id='description'
          placeholder='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor='price'>price</label>
        <input 
          required
          name='price'
          id='price'
          placeholder='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor='location'>location</label>
        <input 
          name='location'
          id='location'
          placeholder='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Will you deliver?</label>
        <label>
          <input
            required
            type='radio'
            value={true}
            name='willDeliver'
            onChange={(event) => setWillDeliver(event.target.value)}
          />
         Yes
        </label>
        <label>
        <input
            required
            type='radio'
            value={false}
            name='willDeliver'
            onChange={(event) => setWillDeliver(event.target.value)}
          />
         No
        </label>
        <button>Create</button>
    </form>
  )
}

export default CreateListingForm