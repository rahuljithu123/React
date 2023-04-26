import React from 'react'

const Football = () => {
    const shoot=()=>{
        alert("Great Shot!")
    }
  return (
    <button onClick={shoot}>Take the Shot!</button>
  )
}

export default Football