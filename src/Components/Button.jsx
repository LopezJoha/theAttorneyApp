import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button className='buttonMain'>
            {props.buttonName}
        </button>
    </div>
  )
}
