import React from 'react'

export default function Tittle(props) {
  return (
    <div className='tittleContainer'>
        <h1>
          {props.tittleContent}
        </h1>
    </div>
  )
}
