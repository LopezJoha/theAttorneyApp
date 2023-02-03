import React from 'react'

export default function Document(props) {
  function showDocument(){
    props.changeDocument(props.documentName);
  }
  return (
    <div className='dodumentContainer' onClick={showDocument}>
         <h2>{props.documentName}</h2>
    </div>
   
  )
}
