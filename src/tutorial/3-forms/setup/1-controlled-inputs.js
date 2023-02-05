import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      console.log('Formu gönder')
      const person = { name, email }
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
      console.log(person)
    } else {
      console.log('Boş değerler')
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Kişi Ekle</button>
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
