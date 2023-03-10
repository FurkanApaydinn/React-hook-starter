import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('rastgele başlık')
  const handleClick = () => {
    if (text === 'rastgele başlık') {
      setText('selam')
    } else {
      setText('rastgele başlık')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Başlığı Değiştir
      </button>
    </>
  )
}

export default UseStateBasics
