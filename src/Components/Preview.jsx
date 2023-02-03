import React from 'react'

export default function Preview(props) {
    

  
  return (
    <div className='previewContainer'>
        <img src={props.path} alt={props.alt}/>
        
    </div>
  )
}
