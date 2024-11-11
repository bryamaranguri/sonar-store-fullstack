import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600' >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi animi atque impedit in sequi vel repudiandae, distinctio quia dolores consequatur vitae, natus inventore error saepe exercitationem delectus eum omnis?
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5' >SOBRE LA EMPRESA</p>
          <ul className='flex flex-col gap-1 text-gray-600' >
            <li>Inicio</li>
            <li>Acerca de Nosotros</li>
            <li>Envíos</li>
            <li>Políticas de Privacidad</li>

          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5' >CONTÁCTANOS</p>
          <ul className='flex flex-col gap-1 text-gray-600' >
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
