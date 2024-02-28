import meImage from '../assets/meImage.webp'

const Hero = () => {
  return (
    <section className="hero">
        <div className='hero__greeting'>
            <img src={meImage} alt="Anlobarri" /> 
            <p>👋🏻 Hola, soy Ángel</p>   
            <span>Disponible para trabajar</span>
        </div>

        <h1>Desarrollador web con acento andalúz. Especializado en Javascript & React</h1>

        <div className='hero__social'>
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
          <a href="mailto:anlobarri@gmail.com">anlobarri@gmail.com</a>
        </div>
    </section>
  )
}

export default Hero