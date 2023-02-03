import './App.css';
import { useState } from 'react';
import Document from './Components/Document';
import Preview from './Components/Preview';
import Tittle from './Components/Tittle';
import Button from './Components/Button';



function App() {
  const [selected, setSelected] = useState(); 

  function Fruta(){
    if(selected === undefined){
      return(
        <Tittle tittleContent = '¡GENERA TUS DOCUMENTOS DE MANERA FÁCIL Y AUTOMÁTICA!'/>
      )
    } else {
      return null
    }
  }

  return (
    <div className='App'>  

     <div className='leftContainer'>
        <Document documentName ='Poder' changeDocument = {setSelected}/>
        <Document documentName ='Citatorio Art 291 C.G.P'/>
        <Document documentName ='Aviso Art 292 C.G.P'/>
      </div> 

      <div className='mainSection'>
        {Fruta()}
        <Preview path={require('./Images/pdf.png')} alt='pdfImg'/>
        <div className='buttonContainer'>
          <Button buttonName = 'Start'/>
          <Button buttonName = 'Print'/>
          <Button buttonName = 'Pdf/Save'/>
        </div>
        
      </div> 
      
    </div>
  );
}

export default App;
