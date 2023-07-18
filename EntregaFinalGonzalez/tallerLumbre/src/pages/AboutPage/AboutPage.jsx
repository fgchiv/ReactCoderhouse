import React from 'react'
import './AboutPage.css'
import photo from '../../assets/about.jpg'

const AboutPage = () => {
  return (
    <div style={{paddingTop: '11vh', textAlign: 'center'}}>
      <h1>Sobre Lumbre</h1>
      <div className='ContainerAbout'>
        
        <div className='PhotoContainer'>
          <img src={photo} alt='about photo' className= "AboutPhoto"></img>
        </div>
          
        <div className='AboutContainer'>
          <h4>Sitio dedicado al cicloturismo y a la bicicleta como medio de transporte urbano. <br /> <br />
          LUMBRE es propiedad de Franco González, quien viaja en bicicleta sin importar la distancia,
          enseña lengua y literatura, arma, diseña y repara bicicletas, y estudia los rudimentos de la programación en Coderhouse.</h4>
        </div>
          
      </div>
    </div>
  )
}

export default AboutPage