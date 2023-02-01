import React from 'react'; 
import img from '../../Images/tree.png';

export default function Header() {
  return (
    <div className='Header_Con'>
      <img src={img} alt='Imagen'></img>
      <list>
        <item>Inicio</item>
        <item>Quienes somos?</item>
        <item>Servicios</item>
        <item>Contacto</item>
      </list>
    </div>
  )
}
