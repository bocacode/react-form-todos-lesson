import { useState } from 'react'
import './App.css'

function FormsIntro() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [form, setForm] = useState({})
  // event.target.value === to what the user typed
  // event.target.id === id of the input field
  // event.target.name === is name of of the input field

  const person = {
    firstName: firstName,
    lastName: lastName,
    email: 'test@gmail.com',
  }

  // const newCoffee = {
  //   description: 'The best coffee in town',
  //   id: '345',
  //   image: 'http://',
  //   ingredients: ['coffee', 'sugar'],
  //   title: 'New Cafecito',
  // }

  const handleFormSubmit = event => {
    event.preventDefault() // stops the form from refreshing page
    console.log('clicking on my button ', form)

    // GET method by default, without second object
    fetch('https://api.sampleapis.com/coffee/hot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => console.log('Success: ', data))
      .catch(err => console.error(err))
  }

  console.log('here is my form', form)

  const handleForm = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    // setForm({ ...form, title: event.target.value })
    // setForm({ ...form, description: event.target.value })
    // setForm({ ...form, image: event.target.value })
    // setForm({ ...form, id: event.target.value })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Coffees Form Intro</h1>
        <form action=''>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            // onChange={e => setForm({ ...form, title: e.target.value })}
            onChange={handleForm}
          />
          <input
            type='text'
            name='description'
            id='description'
            placeholder='description'
            onChange={handleForm}
          />
          <input
            type='text'
            name='image'
            id='image'
            placeholder='image'
            onChange={handleForm}
          />
          <input
            type='text'
            name='id'
            id='id'
            placeholder='id'
            onChange={handleForm}
          />
          <input
            type='text'
            name='ingredients'
            id='ingredients'
            placeholder='ingredients'
            onChange={e =>
              setForm({ ...form, ingredients: ['sugar', 'coffee'] })
            }
          />
          <button type='submit' onClick={handleFormSubmit}>
            Send info
          </button>
        </form>
      </header>
    </div>
  )
}

export default FormsIntro
