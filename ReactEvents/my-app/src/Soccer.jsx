import React from 'react'

const Soccer = () => {
    const shoot=(a)=>{
        alert(a)
    }

  return (
    <button onClick={()=>shoot("Goal!")}>Take The Shot !</button>
  )
}

export default Soccer