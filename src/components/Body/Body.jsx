import React from 'react'

export default function Body({ children, delay = 0}) {
  return (
    <div className='body-container'> 
      <p>{children}</p>
    </div>
  )
}
