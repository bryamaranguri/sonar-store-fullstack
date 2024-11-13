import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t' >
        <Title text1='CONTÁCTANOS' text2='SONAR STORE' />

      </div>

      <div className=' my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
        <img className='2-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className=' flex flex-col justify-center items-start gap-6' >
          <p className='font-semibold text-xl text-gray-600' >Nuestra Tienda</p>
          <p className='text-gray-500' >Av. Javier Prado 322 <br /> Lima, Perú </p>
          <p className=' text-gray-500' >Tel: (01) 645-8327 <br /> E-mail: admin@sonarstore.com </p>
          <p className=' font-semibold text-xl  text-gray-600' > Trabaja con Nosotros </p>
          <p className='text-gray-500' > Más información acerca de nuestro equipo y oportunidades. <br /> Lima, Perú </p>
          <button className=' border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >MÁS INFORMACIÓN</button>
        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
