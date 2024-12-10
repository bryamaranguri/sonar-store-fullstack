import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-gradient-to-r from-[#435151] to-[#152213] p-8 shadow-lg rounded-t-md rounded-b-md '>

        <div>
          <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ><img src={assets.logo} className='mb-5 w-32' alt="" /></Link>
          <p className='w-full md:w-2/3 text-[#e8e0da]' >
          En Sonar Store, nos enorgullece ofrecer una selección de los mejores instrumentos musicales del mercado, cuidadosamente elegidos para satisfacer a los músicos más exigentes. Nuestro compromiso es brindar una experiencia de compra elegante y sofisticada, con productos que combinan calidad, rendimiento y un diseño excepcional.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-[#e8e0da] ' >SOBRE LA EMPRESA</p>
          <ul className='flex flex-col gap-1 text-gray-100' >
            <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ><li className='hover:underline' >Inicio</li></Link>
            <Link to='/about' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  ><li className='hover:underline' >Acerca de Nosotros</li></Link>
            <Link to='/#our-policy' ><li className='hover:underline' >Envíos</li></Link>
            <Link to='/about' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  ><li className='hover:underline' >Políticas de Privacidad</li></Link>

          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-[#e8e0da] ' >CONTÁCTANOS</p>
          <ul className='flex flex-col gap-1 text-gray-100' >
            <li>+51-970-334-345</li>
            <li>contact@sonarstore.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center' >Copyright 2024@ sonarstore.com - All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
