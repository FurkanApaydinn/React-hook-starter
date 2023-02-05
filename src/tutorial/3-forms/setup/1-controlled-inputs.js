import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input type='text' name='email' id='email' />
          </div>
          <button type='submit'>Kişi Ekle</button>
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
