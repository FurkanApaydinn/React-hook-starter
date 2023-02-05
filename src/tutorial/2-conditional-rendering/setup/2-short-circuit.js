import React, { useState } from 'react'
// short-circuit değerlendirmesi
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  // console.log(secondValue)

  return (
    <>
      <button className='btn' onClick={() => setIsError((pre) => !pre)}>
        Toggle Error
      </button>
      {/* {isError && <h1>Error...</h1>} */}
      {isError ? (
        <h1>Hata var...</h1>
      ) : (
        <div>
          <h2>Hata Yok</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
