import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Murat',
    age: 36,
    message: 'rastgele mesaj',
  })
  console.log(person)
  const [name, setName] = useState('Murat')
  const [age, setAge] = useState(36)
  const [message, setMessage] = useState('rastgele mesaj')
  const changeMessage = () => {
    setMessage('Hello World')
    // setPerson({...person,message: "Hello World"})
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Mesajı Değştir
      </button>
    </>
  )
}

export default UseStateObject
